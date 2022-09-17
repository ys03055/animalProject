import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./Main/MainPage";
import LoginPage from "./Login/LoginPage";
import SignUpPage from "./Signup/SignUpPage";
import FreeBoardPage from "./Freeboard/FreeBoardPage";
import MyPagePage from "./Mypage/MyPagePage";

function Routers() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/*" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
                <Route path="/search" element={<FreeBoardPage />} />
                <Route path="/MyPage" element={<MyPagePage />} />

                </Routes>
            </BrowserRouter>
        </div>
        );

}

export default Routers;