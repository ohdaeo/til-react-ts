![ts](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png)
![React](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png)

# Recoil

- 설치방법

```bash
npm i recoil
```

### Convention

**1. case**

- atoms
  : 저장되는 변수
- src/atoms 폴더 생성 (수업용)

- selector
  : atoms 가 변하는 것을 추척 해 값을 출력함
- src/selector 폴더 생성

**2. case**

- src/states 폴더 생성 (이렇게도 사용함)

### 기초 예제

- src/atoms/countAtoms.ts

```ts
import { atom } from "recoil";

// Recoil atom을 사용하여 전역 상태 관리
// key: 해당 atom을 식별하는 고유한 문자열
// default: atom의 초기값을 0으로 설정
export const countAtom = atom<number>({
  key: "countAtom", // 다른 atom과 중복되지 않는 유니크한 키값
  default: 0, // 카운터의 초기값
});

export const loginAtom = atom<boolean>({
  key: "loginAtom",
  default: false,
});
```

- 페이지 전체에 Recoil이 접근 할 수 있도록 적용한다.
- main.tsx

```tsx
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
);
```

### 응용예제 (countAtoms 을 이용한 tsx 생성)

- src/pages/CounterAtom.tsx

```tsx
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { countAtom, loginAtom } from "../atoms/countAtoms";

interface CounterAtomProps {
  children?: ReactNode;
}

const CounterAtom = (): JSX.Element => {
  const [count, setCount] = useRecoilState(countAtom);
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);

  return (
    <div>
      <h1>Counter Atom † : {isLogin ? "로그인 됐어용" : "로그아웃 됐어용"}</h1>
      <div>
        <button onClick={() => setIsLogin(true)}>로그인♧ </button>
        <button onClick={() => setIsLogin(false)}>
          로그아웃 <span>♤</span>
        </button>
      </div>
      <div>
        <h3 style={{ color: "red" }}>{count}</h3>
        <button onClick={() => setCount(count + 1)}>카운터 증가 £ </button>
        <button onClick={() => setCount(count - 1)}>카운터 감소 ¢</button>
      </div>
    </div>
  );
};

export default CounterAtom;
```

### 응용예제 (Todo)

- src/atoms/todoListAtom.ts

```ts
import { atom } from "recoil";

export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export const todoListAtom = atom<TodoType[]>({
  key: "todoListAtom",
  default: [],
});
```

- src/pages/TodoList.tsx

```tsx
import { ReactNode, useState } from "react";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../atoms/todoListAtom";

interface TodoListProps {
  children?: ReactNode;
}

const TodoList: React.FC<TodoListProps> = () => {
  // todos 상태와 업데이트 함수를 Recoil atom에서 가져옴
  const [todos, setTodos] = useRecoilState(todoListAtom);
  // 입력 필드의 값을 관리하는 상태
  const [value, setValue] = useState<string>("");

  // 새로운 할 일을 추가하는 함수
  const addTodo = () => {
    if (value.trim()) {
      // 빈 문자열이 아닐 경우에만 새로운 할 일 추가
      setTodos([...todos, { id: Date.now(), text: value, completed: false }]);
    }
    setValue(""); // 입력 필드 초기화
  };

  // 할 일의 완료 상태를 토글하는 함수
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  // 할 일을 삭제하는 함수
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {/* 할 일 입력 폼 */}
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          name=""
          id=""
        />
        <button onClick={() => addTodo()}>추가 †</button>

        {/* 할 일 목록 */}
        <ul>
          {todos.map(item => (
            <li key={item.id} style={{ display: "flex", alignItems: "center" }}>
              {/* 할 일 텍스트 - 클릭하면 완료 상태 토글 */}
              <p
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
                onClick={() => toggleTodo(item.id)}
              >
                {item.text}
              </p>
              {/* 삭제 버튼 */}
              <button
                onClick={() => {
                  deleteTodo(item.id);
                }}
              >
                삭제 ♤
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
```

### Selector 의 이해

Selector는 Recoil의 파생된 상태(derived state)를 나타내는 함수이다.

- atom이나 다른 selector의 상태를 기반으로 데이터를 변환
- 자동으로 상태 의존성을 추적하고 필요할 때만 재계산
- 캐시된 결과를 재사용하여 성능 최적화

**예제 코드:**

- src/selector/countSelector.ts

```ts
import { selector } from "recoil";
import { countAtom } from "../atoms/countAtoms";

// countAtom의 값이 짝수인지 홀수인지 반환하는 selector
export const countSelector = selector<string>({
  key: "countSelector",
  // atoms의 값이 변경될 때마다 자동으로 get 함수가 실행되어 새로운 값을 계산
  get: ({ get }) => {
    // countAtom의 현재 값을 가져옴
    const count = get(countAtom);
    // 2로 나눈 나머지가 0이면 "짝수", 아니면 "홀수" 반환
    return count % 2 == 0 ? "짝수" : "홀수";
  },
});
```

```tsx
const nowValue = useRecoilValue(countSelector);

return <h3>{nowValue}</h3>;
```

### Todo List 에서 completed 가 true

- src/selector/todoListSelector.ts

```ts
import { selector } from "recoil";
import { todoListAtom } from "../atoms/todoListAtom";

// 완료된 할 일 항목만 필터링하여 반환하는 selector
export const todoListSelector = selector<TodoType[]>({
  key: "todoListSelector",
  // todoListAtom의 상태가 변경될 때마다 자동으로 실행되어 필터링된 결과를 반환
  get: ({ get }) => {
    // todoListAtom에서 전체 할 일 목록을 가져옴
    const todos = get(todoListAtom);
    // completed가 true인 항목만 필터링하여 반환 (완료된 할 일만 선택)
    return todos.filter(item => item.completed === true);
  },
});
```

```tsx
const completedTodo = useRecoilValue(todoListSelector);
return (
  <>
    <h2> 완료된 목록들</h2>
    <ul>
      {completedTodo.map(item => (
        <li>{item.text}</li>
      ))}
    </ul>
  </>
);
```
