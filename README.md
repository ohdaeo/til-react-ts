![ts](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png)
![React](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png)

# State 의 이해

```ts

interface UserInfo {
  id: number;
  level: number;
  login?: boolean;
}

function App() {
  // 초기 값 설정
  // 제네릭으로 타입변수 지정
  const [count, setCount] = useState<number>(0);
  const [point, setPoint] = useState<number | null>(0);

  // 객체형 타입 정의
  const [user, setUser] = useState<UserInfo | null>(null);

  return <div>App</div>;
}

export default App;

```
