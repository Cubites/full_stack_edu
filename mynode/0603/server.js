const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const port = 4000;

const app = http.createServer((req, res) => {
    // 1. 요청 주소
    console.log(url);
    let parseUrl = url.parse(req.url, true);
    console.log(parseUrl);
    // const url = req.url;
    // const fullUrl = new URL('http://localhost:4000' + url);
    // const pathName = fullUrl.pathName;

    // if(pathName === '/'){
    //     res.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
    //     res.write(`
    //         <!DOCTYPE html>
    //         <html lang="ko">
    //         <head>
    //             <meta charset="UTF-8">
    //             <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //             <title>Document</title>
    //             <style>
    //                 div{
    //                     width: 1000px;
    //                     padding: 30px;
    //                     border-bottom: 1px solid #ddd;
    //                     margin: 20px auto;
    //                 }
    //                 input, textarea{
    //                     width: 100%;
    //                     padding: 10px;
    //                 }
    //                 textarea{
    //                     height: 100px;
    //                 }
    //                 button{
    //                     padding: 10px 30px;
    //                     font-size: 18px;
    //                 }
    //             </style>
    //         </head>
    //         <body>
    //             <form action="/writeAction" method="post">
    //                 <div>
    //                     <label>타이틀</label>
    //                     <input type="text" name="title" placeholder="타이틀" required>
    //                 </div>
    //                 <div>
    //                     <textarea name="description" placeholder="설명"></textarea>
    //                 </div>
    //                 <div>
    //                     <button type="submit"> 전송 </button>
    //                 </div>
    //             </form>
    //         </body>
    //         </html>
    //     `);
    //     res.end();
    // }else{

    // }
})
app.listen(port, () => {
    console.log(`${port} 서버가 시작되었습니다.`);
});