import {
  createSearchParams,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

// 전송 쿼리 타입
interface QueryData {
  name: string;
  age: string;
}

// 숨겨진 데이터 타입
interface HiddenInfo {
  memo: string;
  good: string;
  favorite: string;
}

const Good = (): JSX.Element => {
  const navigate = useNavigate();

  // 1. 주소 및 쿼리스트링 만들기
  const normalUrl = () => {
    const url = `/company/ceo?name=boo&age=27`;
    navigate(url);
  };

  // 2. 문법을 이용 해 쿼리스트링 만들기
  const secialUrl = () => {
    // 전송 데이터
    const ageVal = 20;
    const queryData: QueryData = {
      name: "Hong",
      age: `${ageVal}`,
    };
    // 데이터 직렬화
    const queryStr = createSearchParams({ ...queryData }).toString();

    // 쿼리 정보 숨기기
    const hiddenUrl: HiddenInfo = {
      memo: "숨길 내용",
      good: "제품에서 타고온 정보",
      favorite: "사용자가 관심있던 상품 정보",
    };

    navigate(
      {
        pathname: "/company/ceo",
        search: queryStr,
      },
      { state: hiddenUrl },
    );
  };

  return (
    <div>
      <h1>제품 소개</h1>
      <div>
        <button onClick={normalUrl}>navigate로 이동</button>
      </div>
      <div>
        <button onClick={secialUrl}>추천 이동</button>
      </div>
      <div>
        <Link to={"/good/1"}>제품 1번</Link>
        <Link to={"/good/delete/1"}>삭제</Link>
        <Link to={"/good/modify/1"}>수정</Link>
      </div>
      <div>
        <h5>레이아웃을 유지하고 화면에 출력하기</h5>
        <Outlet />
      </div>
    </div>
  );
};

export default Good;
