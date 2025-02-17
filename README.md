![ts](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png)
![React](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png)

# Component 의 이해

- App.tsx

**Type 01**

```ts
const App: React.FC = () => {
  return <div>App</div>;
};

export default App;
```

**Type 02**

```ts
const App = (): JSX.Element => {
  return <div>App</div>;
};

export default App;

```

**Type 03**

```ts
const App: React.FC = (): JSX.Element => {
  return <div>App</div>;
};

export default App;
```

#### React.FC 란?

- React.FC는 'React Function Component'의 약자
- 특징:
  - 함수형 컴포넌트를 위한 타입스크립트 제네릭 타입
  - children prop이 기본적으로 포함됨
  - 반환 타입: JSX.Element | null

#### JSX.Element 란?

- React에서 JSX 문법으로 작성된 요소의 타입
- 특징:
  - React.createElement()의 반환 타입
  - 모든 JSX 요소의 기본 타입 (div, span 등 HTML 요소 포함)
  - React.ReactElement의 특정 타입으로, props와 type이 구체화된 인터페이스

## Props 전달하기

- src/components/Props.tsx

**Step 01**
props 직접 전달
props: { age: number; name: string }

```tsx
// 함수의 파라미터는 TS에서 타입을 지정해줘야한다.
const Props = (props: { age: number; name: string }): JSX.Element => {
  return (
    <div>
      Props
      {props.age}
      {props.name}
    </div>
  );
};

export default Props;
```

**Step 02**

interface로 props 전달

```tsx
interface isProps {
  age: number;
  name: string;
}

const Props = (props: isProps): JSX.Element => {
  return (
    <div>
      Props
      {props.age}
      {props.name}
    </div>
  );
};

export default Props;
```

**Step 03**
객체 구조 분해할당으로 props 전달

```tsx
interface isProps {
  age: number;
  name: string;
}

const Props = ({ age, name }: isProps): JSX.Element => {
  return (
    <div>
      Props
      {age}
      {name}
    </div>
  );
};

export default Props;
```

**Step 04**
props 의 children 처리

```tsx
interface isProps {
  age: number;
  name: string;
  children?: React.ReactNode;
}

const Props = ({ age, name }: isProps): JSX.Element => {
  return (
    <div>
      Props
      {age}
      {name}
    </div>
  );
};

export default Props;
```

### Props 로 useState 변수 전달

- App.tsx (일반변수, state, children 을 전달 )

```tsx
import React, { useState } from "react";
import Props from "./Props";

const App: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      App
      <Props age={27} name="Boo Seungkwan" count={count} setCount={setCount} />
    </div>
  );
};

export default App;
```

1. count 와 setCount 가 현재 컴포넌트에 정의가 되어있지않다.
2. interface isProps 조건에 맞지 않는다. (형태 불일치)

```ts
import { Dispatch, SetStateAction } from "react";

interface isProps {
  age: number;
  name: string;
  children?: React.ReactNode;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const Props = ({ age, name }: isProps): JSX.Element => {
  return (
    <div>
      Props
      {age}
      {name}
    </div>
  );
};

export default Props;

```

- setCount 같은 경우 직접 전달하는 것은 컴포넌트

### Props 함수 전달

- App.tsx

```tsx
import React, { useState } from "react";
import Props from "./Props";

const App: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const add = (): void => {
    const temp = count + 1;
    setCount(temp);
  };

  const minus = (num: number): void => {
    const temp = count - num;
    setCount(temp);
  };

  return (
    <div>
      App
      <Props
        age={27}
        name="Boo Seungkwan"
        count={count}
        setCount={setCount}
        add={add}
        minus={minus}
      />
    </div>
  );
};

export default App;
```

- Props.tsx

```tsx
import { Dispatch, SetStateAction } from "react";

interface isProps {
  age: number;
  name: string;
  children?: React.ReactNode;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  add: () => void;
  minus: (num: number) => void;
}

const Props = ({ age, name }: isProps): JSX.Element => {
  return (
    <div>
      Props
      {age}
      {name}
    </div>
  );
};

export default Props;
```
