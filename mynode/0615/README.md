### nodemon
* 수정사항을 실시간으로 적용시켜줌

### 모듈
* express 4.16.X 버전부터 body-parser 내장

#### morgan
* npm i morgan cookie-parser express-session dotenv
* morgan, cookie-parser, express-session >> 미들웨어
* dotenv : env 파일 생성 (미들웨어 아님)

#### multer
* 기본 셋팅
  > <pre>
  > const multer = require('multer');
  > 
  > const upload = multer({ // destination에 filename으로 저장되게 지정
  >   storage: multer.diskStorage({
  >     destination(req, file, done){
  >       done(null, 'uploads/');
  >     },
  >     filename(req, file, don){
  >       const ext = path.extname(file.originalname);
  >       // 이름 >> 이름 / .jpg >> 이름 + 날짜 + .jpg
  >       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
  >     },
  >     limits: {fileSize: 5 * 1024 * 1024}
  >   });
  > });
  * limits : 업로드 크기 제한 (위 예시: 1024*1024(1M) * 5 => 5M으로 제한)

### 미들웨어
* 요청, 응답의 중간에 위치해서 요청 또는 응답을 제어하는 소프트웨어
* 예 : <code>app.use(미들웨어)</code>

* app.use : 모든 요청에 응답
* app.get : get 요청에만 응답
* app.post : post 요청에만 응답
