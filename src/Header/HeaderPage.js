import React, {Fragment, useState, useEffect} from "react";
import "./HeaderPage.css";
import {NavLink, Link} from "react-router-dom";


function HeaderPage()  {




    return (
        <Fragment>
            <div className="logo">
                <NavLink to={"/MainPage"} >
                    <img src={require("./HeaderImage/putkorea.png")} className = "img_logo"/>
                </NavLink>

            </div>
            <div className="links">
                <Link to='/signUp' className="link_text">로그인</Link>
                &nbsp;
                <Link to='/signup' className="link_text">회원가입</Link>
                &nbsp;
                <Link to='/' className="link_text">마이페이지</Link>
                &nbsp;
                <Link to='/' className="link_text">건의사항</Link>
            </div>

            <div className="menuBar">

                <div className="animalBoard">
                    <Link to='/login' >동물게시판</Link>
                </div >

                <div className="freeBoard">
                    <Link to='/login' >자유게시판</Link>
                </div>
                <div className="dailyBoard">
                    <Link to='/login' >일상게시판</Link>
                </div>
                <div className="honeyBoard">
                    <Link to='/login' >꿀팁게시판</Link>
                </div>
                <div className="tradeBoard">
                    <Link to='/login' >거래게시판</Link>
                </div>
                <div className="adoptBoard">
                    <Link to='/login' >입양게시판</Link>
                </div>



            </div>





        </Fragment>
    )

}

export default HeaderPage;