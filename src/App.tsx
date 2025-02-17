import { useState } from "react";

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
