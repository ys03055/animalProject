import "./LoginPage.css"
import HeaderPage from "../Header/HeaderPage"
import TextField from '@material-ui/core/TextField';
import {useState} from "react";
import {Button} from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';

function LoginPage() {

    const {login} = useState("true");



    return (
        <body>
        <header>
            <HeaderPage>
            </HeaderPage>
        </header>

        <main className="Login">
            <div>
                <div className= "LoginPageCardDiv">
                <h1>로그인</h1>
                    <TextField id="standard-required" label="아이디"  />
                    <TextField  id="standard-required" label="비밀번호" />
                    <Button variant="contained" color="primary"> 로그인</Button>
                </div>

            </div>

        </main>

        </body>
    )
}

export default LoginPage;