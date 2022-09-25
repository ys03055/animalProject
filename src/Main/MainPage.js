import React, {Fragment, useEffect, useState} from "react";
import { Card } from 'antd';
import "./MainPage.css";
import HeaderPage from "../Header/HeaderPage";
import dog from "../pic/dog.jpg";
import cat from "../pic/cat.jfif"
import deer from "../pic/deer.jfif"
import snake from "../pic/snake.jfif"
import person1 from "../pic/1.png"
import person2 from "../pic/2.png"
import person3 from "../pic/3.png"

import {Link} from "react-router-dom";

function MainPage()  {



    return (

        <Fragment>


            <body>
            <header>
                <HeaderPage></HeaderPage>

            </header>

            <main className="Main">
                <div>
                <div className="MainPageCardDiv">
                    <Card className="MainPageMiniHeader">
                        *내 반려동물과의 하루
                    </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={dog} />}>
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={cat} />}>
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={deer} />}>
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={snake} />}>
                        </Card>
                </div>

                <div className="MainPageCardDiv">
                    <Card className="MainPageMiniHeader" >
                        *나의 반려동물을 위한 용품 추천
                    </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={dog} />}>
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={cat} />}>
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={deer} />}>
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={snake} />}>
                        </Card>
                </div>

                <div className="MainPageCardDiv">
                    <Card className="MainPageMiniHeader" >
                        *이 주의 반려동물
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={dog} />}>
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={cat} />}>
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={deer} />}>
                        </Card>
                        <Card hoverable className="MainPageCard" cover = {<img className="Pic" src={snake} />}>
                        </Card>
                </div>

                <div className="MainPageCardDivPerson">
                    <Card className="MainPageMiniHeader" >
                        *명예 회원
                    </Card>
                    <div className="MainPageCardDivPersonDiv">
                        <div className= "PersonMini">
                        <Card hoverable className="MainPageCardPerson" cover = {<img className="Pic" src={person1} />}>
                        </Card>
                            <h1 className="recommendFirst"> 닉네임 : 방재성</h1>
                            <h1 className="recommendFirst1"> 추천수 : 1000</h1>
                        </div>


                        <div className= "PersonMini">
                        <Card hoverable className="MainPageCardPerson" cover = {<img className="Pic" src={person2} />}>
                        </Card>
                            <h1 className="recommendSecond"> 닉네임 : 방일호</h1>
                            <h1 className="recommendSecond1"> 추천수 : 500</h1>
                        </div>

                        <div className= "PersonMini">
                        <Card hoverable className="MainPageCardPerson" cover = {<img className="Pic" src={person3} />}>
                        </Card>
                            <h1 className="recommendThird"> 닉네임 : 방수민</h1>
                            <h1 className="recommendThird1"> 추천수 : 200</h1>
                        </div>

                    </div>




                </div>

                <Card className="honeyBoards">
                <h1 className="honeyBoardHeader">꿀팁 게시판</h1>
                <div className="honeyBoardDiv">
                    <div className="linkStyle">
                        <Link to ="/">더보기</Link>
                    </div>
                    <br/>
                    <br/>
                    <Link to ="/">강아지를 길들이는 방법</Link>
                    <br/>
                    <br/>
                    <Link to ="/">고양이 샤워 잘 시키는 방법</Link>
                    <br/>
                    <br/>
                    <Link to ="/">이구아나 진드니 없애는 법</Link>
                    <br/>
                    <br/>
                    <Link to ="/">새끼 거북이 키우는 법</Link>
                    <br/>
                    <br/>
                    <Link to ="/">강아지가 좋아하는 간식</Link>
                </div>
                </Card>

                    <Card className="freeBoards">
                        <h1 className="freeBoardHeader">자유 게시판</h1>
                        <div className="freeBoardDiv">
                            <div className="linkStyle">
                                <Link to ="/">더보기</Link>
                            </div>
                            <br/>
                            <br/>
                            <Link to ="/">강아지가 말을 안들어요 ㅠ</Link>
                            <br/>
                            <br/>
                            <Link to ="/">캣타워 만드는 법 좀요!</Link>
                            <br/>
                            <br/>
                            <Link to ="/">하루는 고양이가 되고 싶다.</Link>
                            <br/>
                            <br/>
                            <Link to ="/">나는야 낭만 강아지</Link>
                            <br/>
                            <br/>
                            <Link to ="/">개 간식을 먹어보아요</Link>
                        </div>
                    </Card>



                </div>
            </main>


            </body>

        </Fragment>
    )
}

export default MainPage;