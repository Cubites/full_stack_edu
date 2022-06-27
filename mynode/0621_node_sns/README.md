## Schedule
* 로그인
* 이미지 업로드
* 게시글 작성
* 해시태그 검색
* 팔로잉
* 관계형 데이터베이스 사용 - MySQL

## 과정
### 1. sequelize 폴더 구조 생성
  * <code>npm i sequelize mysql2 sequelize-cli -s</code>
  * <code>npx sequelize init</code> 
    <br>> config, migrations, models, seeders 폴더가 생성 됨
  * view(템플릿 엔진), routes(라우터), public(정적 파일), passport 폴더 생성
  * app.js, .env 파일 생성

### 2. 데이터 베이스 연결
  * 모델 생성
    * models/user.js - 사용자 테이블과 연결
      > -> provier : 카카오 로그인인 경우 kakao, 로컬 로그인인 경우 local
      > snsId : 카카오 로그인인 경우에는 카카오에서 보내주는 아이디로 세팅
    * models/post.js - 게시글 내용과 이미지 경로를 저장 (이미지는 파일로 저장함)
    * models/hashtag.js - 해시태그 이름을 저장 (나중에 태그로 검색하기 위해서 임)
  
### 3. 라우터 (템플릿 엔진)
* routes/page.js : 템플릿 엔진을 렌더링하는 라우터
* views/layout.html : 프론트 엔드 화면 레이아웃 (로그인/유저정보)
* views/main.html : 메인 화면 (게시글들이 보임)
* views/profile.html: 프로필 화면 (팔로잉 관계가 보임)
* view/join.html: 회원가입 화면
* views/error.html: 에러 발생 시 에러 표시
* public/css/style.css: 공용 css 파일

### 4. Passport 모듈로 로그인 구현
* 회원가입, 로그인을 직접 구현할 수 있음
* 공용 API를 이용한 로그인까지 모두 처리할 수 있도록 하기 위해 Passport 모듈을 사용
  <br>> 세션, 쿠키 등의 복잡한 작업을 처리
* Passport는 모듈의 이름처럼 서비스를 사용할 수 있게 해주는 '여권' 같은 역할
* 패키지 설치: <code>npm install passport passport-local passport-kakao bcrypt -s</code>
  * bscrypt : 비밀번호를 암호화 하기 위한 모듈
* passport 모듈에는 serializeUser 와 deserializeUser 가 있음
* serializeUser는 로그인 시 실행되어 req.session 객체에 어떤 데이터를 저장할 지 정하는 메서드
  * 매개변수로 user를 받고 done 함수에 두 번째 인수로 user.id를 넘김
* deserializeUser 는 매 요청시 실행되는 함수 passport.session 미들웨어가 이 메서드로 호출됨
* serializeUser & deserializeUser
  * serializeUser
    > <pre>
    > passport.serializeUser((user, done) => {
    >   done(null, user.id);
    > });
    > </pre>
    > 1. 라우터를 통해 로그인 요청
    > 2. 라우터에서 passport.authenticate 메서드 호출
    > 3. 로그인 전략 수행
    > 4. 로그인 성공 시 사용자 정보 객체와 함께 req.login 호출
    > 5. req.login 메서드가 passport.serializeUser 호출
    > 6. req.session에 사용자 아이디만 저장
  * deserializeUser
    > <pre>
    > passport.deserializeUser((id, done) => {
    >   User.findOne({where: {id}})
    >     .then(user => done(null, user))
    >     .catch(err => done(err));
    > });
    > </pre>
    > 1. 요청이 들어옴
    > 2. 라우터에 요청이 도달하기 전에 passport.session 미들웨어가 passport.deserializeUser 메서드 호출
    > 3. req.session에 저장된 아이디로 데이터베이스에서 사용자 조회
    > 4. 조회된 사용자 정보를 req.user에 저장
    > 5. 라우터에서 req.user 객체 사용

## 암호화
* 암호화 <----> 복호화
  * 암호화한 비밀번호를 복호화할 수 있는 경우 보안에 취약
* 암호화 <---- 복호화
  * 일반적인 회원가입 비밀번호 방식
  * 때문에 대부분의 사이트에서 비밀번호 찾기를 하면 새 비밀번호를 생성하게 함

### bscrpt
* 비밀번호 암호화를 위해 bcrypt 사용
* 설치 후 app.js와 연결
* passport.initialize() : 요청 객체에 passport 설정을 심음
* passport.session() : req.session 객체에 passport 정보를 저장
* express-session 미들웨어에 의존하므로 이보다 뒤에 위치해야 함