import React, {Fragment, useEffect, useState} from "react";
import { Card } from 'antd';
import "./MainPage.css";
import HeaderPage from "../Header/HeaderPage"
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
                <div className="MainPageMiniHeader"> </div>
                <div className="MainPageCardDiv">
                    <Card title="내 반려동물과의 하루">
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    </Card>
                </div>


                <div className="MainPageMiniHeader"></div>
                <div className="MainPageCardDiv">
                    <Card title="나의 반려동물을 위한 용품 추천" className="MainPageMiniHeader">
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    </Card>
                </div>

                <div className="MainPageMiniHeader"></div>
                <div className="MainPageCardDiv">
                    <Card title="이 주의 반려동물">
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    </Card>
                </div>

                <div className="MainPageMiniHeader"></div>
                <div className="MainPageCardDiv">
                    <Card title="명예 회원">
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    <Card.Grid className="MainPageCard">Content</Card.Grid>
                    </Card>
                </div>

                <Card className="honeyBoards">
                <h1 className="honeyBoardHeader">꿀팁 게시판</h1>
                    <Link to ="/">더보기</Link>
                    <br/>
                <div className="honeyBoardDiv">
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
                        <Link to ="/">더보기</Link>
                        <br/>
                        <div className="freeBoardDiv">
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