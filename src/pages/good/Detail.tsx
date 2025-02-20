import { ReactNode } from "react";
import { useParams } from "react-router-dom";

interface DetailProps {
  children?: ReactNode;
  title: string;
}

const Detail = ({ title }: DetailProps): JSX.Element => {
  // 만약 쿼리 형태였다면 useSearchParams 를 사용한다.
  const { id } = useParams();
  return (
    <div>
      {title}
      <h1>{id}번 제품 상세 페이지</h1>
    </div>
  );
};

export default Detail;
