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
                <Link to='/login' className="link_text">로그인</Link>
                &nbsp;
                <Link to='/signup' className="link_text">회원가입</Link>
                &nbsp;
                <Link to='/' className="link_text">마이페이지</Link>
                &nbsp;
                <Link to='/' className="link_text">건의사항</Link>
            </div>

            <div className="menuBar">
                <div className="noticeBoard1">
                    <Link to='/login' >게시판1</Link>
                </div >

                <div className="noticeBoard2">
                    <Link to='/login' >게시판2</Link>
                </div>
                <div className="noticeBoard3">
                    <Link to='/login' >게시판3</Link>
                </div>

                <div className="noticeBoard4">
                    <Link to='/login' >게시판1</Link>
                </div >

                <div className="noticeBoard5">
                    <Link to='/login' >게시판2</Link>
                </div>
                <div className="noticeBoard6">
                    <Link to='/login' >게시판3</Link>
                </div>
                <div className="noticeBoard7">
                    <Link to='/login' >게시판4</Link>
                </div>
                <div className="noticeBoard8">
                    <Link to='/login' >게시판5</Link>
                </div>



            </div>





        </Fragment>
    )

}

export default HeaderPage;