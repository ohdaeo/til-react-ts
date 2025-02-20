import { useLocation, useSearchParams } from "react-router-dom";

const Ceo = (): JSX.Element => {
  // 현재 UPI의 주소의 패스 알아내기
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.search);
  console.log(location.state);

  // 쿼리 스트린 값 추출
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <div>
      <h3>Ceo {name}님</h3>
      <h3>나이 {age}세</h3>
    </div>
  );
};

export default Ceo;
