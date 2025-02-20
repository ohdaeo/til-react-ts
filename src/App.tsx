import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Index";
import Company from "./pages/company/Index";
import Ceo from "./pages/company/Ceo";
import History from "./pages/company/History";
import Location from "./pages/company/Location";
import Partner from "./pages/company/Partner";
import Good from "./pages/good/Good";
import Detail from "./pages/good/Detail";
import Header from "./component/Header";
import { useState } from "react";

export interface PartnerType {
  name: string;
  link: string;
}

function App(): JSX.Element {
  const partnerList: PartnerType[] = [
    {
      name: "삼성",
      link: "https://www.samsung.com/sec/",
    },
    {
      name: "LG",
      link: "https://www.lge.co.kr/m/home",
    },
    {
      name: "애플",
      link: "https://www.apple.com/kr/",
    },
  ];

  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="wrap">
        <Header>
          {isLogin ? (
            <div>
              <button>정보수정</button>
              <button>로그아웃</button>
            </div>
          ) : (
            <div>
              <button>로그인</button>
              <button>회원가입</button>
            </div>
          )}
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company">
            <Route index element={<Company />} />
            <Route path="ceo" element={<Ceo />} />
            <Route
              path="history"
              element={<History title="Good Company" year={1990} />}
            />
            <Route
              path="partner"
              element={<Partner partnerList={partnerList} />}
            />
            <Route path="location" element={<Location />} />
          </Route>
          {/* 상품정보 */}
          <Route path="/good" element={<Good />}>
            <Route path=":id" element={<Detail title={"GOOD COMPANY"} />} />
            <Route path="delete/:id" element={<h1>제품 삭제 페이지</h1>} />
            <Route path="modify/:id" element={<h1>제품 수정 페이지</h1>} />
          </Route>
        </Routes>
        <footer>하단</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
