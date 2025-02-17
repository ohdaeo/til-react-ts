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
