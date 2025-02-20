![ts](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png)
![React](https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png)

# Router

- 설치

```bash
npm install react-router-dom
npm i @types/react-router-dom
```

- App.tsx

```tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

- src/pages/Index.tsx

```tsx
const Index = (): JSX.Element => {
  return <h1>Home Page</h1>;
};

export default Index;
```

- src/pages/company/Index.tsx

```tsx
const Index = (): JSX.Element => {
  return <div>회사 소개</div>;
};

export default Index;
```

- src/pages/company/Ceo.tsx

```tsx
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
```

- src/pages/company/History.tsx

```tsx
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
```

- src/pages/company/Partner.tsx

```tsx
import { ReactNode } from "react";
import { PartnerType } from "../../App";

interface PartnerProps {
  partnerList: PartnerType[];
  children?: ReactNode;
}

const Partner: React.FC<PartnerProps> = ({ partnerList }) => {
  return (
    <div>
      <h1>Partner</h1>
      <ul>
        {partnerList.map((item, index) => (
          <li key={index}>
            {item.name} {item.link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partner;
```

- src/pages/Good.tsx

```tsx
import { createSearchParams, Link, useNavigate } from "react-router-dom";

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
      </div>
    </div>
  );
};

export default Good;
```

- src/good.tsx

```tsx
import { createSearchParams, Link, useNavigate } from "react-router-dom";

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
      </div>
    </div>
  );
};

export default Good;
```

/ App.tsx

```tsx
<Route path="/good">
  <Route index element={<Good />} />
  <Route path=":id" element={<Detail title={"GOOD COMPANY"} />} />
  <Route path="delete/:id" element={<h1>제품 삭제 페이지</h1>} />
  <Route path="modify/:id" element={<h1>제품 삭제 페이지</h1>} />
</Route>
```
