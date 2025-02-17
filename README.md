![ts](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png)
![React](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png)

# 이벤트의 이해

## onClick

```tsx
const Props = (): JSX.Element => {
  return (
    <div>
      <button onClick={() => console.log("Hello")}>Button</button>
      <form>
        <button type="button" onClick={() => console.log("Hi")}></button>
      </form>
    </div>
  );
};

export default Props;
```

- 이벤트 확인

```ts
const Props = (): JSX.Element => {
  const divClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("Click", e);
  };
  const btnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Click", e);
  };
  const formClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Click", e);
  };

  return (
    <div>
      <div onClick={e => divClick(e)}>DIV Button</div>
      <button onClick={e => btnClick(e)}>Button</button>
      <form>
        <button type="button" onClick={e => formClick(e)}>Form Button</button>
      </form>
    </div>
  );
};

export default Props;
```

- 축약형

```tsx
import { MouseEvent } from "react";

const Props = (): JSX.Element => {
  const divClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Click", e);
  };
  const btnClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Click", e);
  };
  const formClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Click", e);
  };

  return (
    <div>
      <div onClick={e => divClick(e)}>DIV Button</div>
      <button onClick={e => btnClick(e)}>Button</button>
      <form action="">
        <button type="button" onClick={e => formClick(e)}>
          Form Button
        </button>
      </form>
    </div>
  );
};

export default Props;
```

## onChange

```tsx
import { ChangeEvent } from "react";

const Props = (): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" onChange={e => handleChange(e)} />
        <input type="checkbox" onChange={e => handleChangeCheck(e)} />
      </form>
    </div>
  );
};

export default Props;
```

## onSubmit

```tsx
import { FormEvent } from "react";

const Props = (): JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}></form>
    </div>
  );
};

export default Props;
```
