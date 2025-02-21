import { ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom, loginAtom } from "../atoms/countAtoms";
import { countSelector } from "../selector/countSelector";

interface CounterAtomProps {
  children?: ReactNode;
}

const CounterAtom = (): JSX.Element => {
  const [count, setCount] = useRecoilState(countAtom);
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const nowValue = useRecoilValue(countSelector);

  return (
    <div>
      <h1>Counter Atom: {isLogin ? "로그인 됐어용" : "로그아웃 됐어용"}</h1>
      <div>
        <button onClick={() => setIsLogin(true)}>로그인 ♧ </button>
        <button onClick={() => setIsLogin(false)}>로그아웃 ♤</button>
      </div>
      <div>
        <h3 style={{ color: "red" }}>{count}</h3>
        <h3>{nowValue}</h3>
        <button onClick={() => setCount(count + 1)}>카운터 증가 £ </button>
        <button onClick={() => setCount(count - 1)}>카운터 감소 ¢</button>
      </div>
    </div>
  );
};

export default CounterAtom;
