import { ReactNode } from "react";

interface HistoryProps {
  children?: ReactNode;
  title: string;
  year: number;
}

const History = ({ title, year }: HistoryProps): JSX.Element => {
  return (
    <div>
      <h1>History</h1>
      <h3>{title}</h3>
      <h3>{year}</h3>
    </div>
  );
};

export default History;
