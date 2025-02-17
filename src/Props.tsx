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
