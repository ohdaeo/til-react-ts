import React, { useState } from "react";
import Props from "./Props";
import Todo from "./component/Todo";

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
      ♤ ♧ † £ ¢
      <Props
        age={27}
        name="Boo Seungkwan"
        count={count}
        setCount={setCount}
        add={add}
        minus={minus}
      />
      <Todo />
    </div>
  );
};

export default App;
