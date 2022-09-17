// import modules
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path');
const AWS = require('aws-sdk');
const fs = require('fs');
const dotenv = require('dotenv');
const PythonShell = require('python-shell');
const multer = require('multer')
const multerS3 = require('multer-s3');
dotenv.config();

//------------------------------------------
const app = express();
app.set('port', process.env.Port || 3000);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,''))); //파일 경로 필요
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//-------------------라우터 분할 필요----------------------------성-
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'')); //메인페이지로 이동, 파일 명 필요
});
//-------------------------------------------

// 404 에러처리 미들웨어
app.use((req, res, next) => {
    res.status(404).send(`${req.method} ${req.path} is NOT FOUND`);
});

// 서버 에러처리 미들웨어
app.use((err,req,res,next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(500).send('Something broken!');
});

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}에서 대기중`);
});