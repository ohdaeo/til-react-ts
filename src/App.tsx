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
