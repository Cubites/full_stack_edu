# Node Server
* setting
  1. command 창에 <code>npm init -y</code> 입력
  2. package.json에서 scripts를 아래 코드로 수정
  > <pre>
  >  "scripts": {
  >    "client": "cd client && yarn start",
  >    "server": "nodemon server.js",
  >    "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
  >  }
  > </pre>
  2. 다음 2개 설치
  > <pre>
  > npm install express -s
  > npm install nodemon -s
  > </pre>
  3. concurrently 설치
  * <code>npm install concurrently --save-dev</code>
  * dependencies : 애플리케이션의 직접 동작과 연관된 라이브러리
  * devDependencies : 애플리케이션 직접 동작과는 연관이 없는 라이브러리

# 사용법
1. "index copy.html" 파일 명을 "index.html"로 변경
2. 해당 파일의 kakao api 링크에 본인의 개발자 키 입력