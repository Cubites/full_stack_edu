# TypeScript
* 설치 : <code>npm install -g typescript</code>
* 자동컴파일 명령: <code>tsc -w</code>

## react typescript, node typescript
* 설치: <code>npm install -D typescript @types/react @types/node</code>

## Lint, ESLint
* 소스 코드에 문제가 있는지 탐색하는 작업
* linter : 이 작업을 도와주는 소프트웨어 도구
* JavaScript 같이 컴파일 과정이 없는 인터프리터 언어의 경우 런타임 에러 발생 확률이 높음
  <br>> 태문에 이 린트 작업으로 사전에 에러를 최대한 잡으려 함
* 설치 : <code>npm install -D eslint</code>
* 셋팅
  > 1. 관리자 권한으로 CMD창 실행
  > 2. node_modules > .bin 폴더로 이동
  > 3. <code>eslint --init</code> 입력
  > 4. y 선택
  > 5. to check syntax and find problems, and enforce code style 선택
  > 6. JavaScript modules (import/export) 
  > 7. React
  > 8. Tes
  > 9. Browser
  > 10. Use a popular style guide
  > 11. Airbnb: https://github.com/airbnb/javascript
  > 12. JavaScript
  > 13. Yes > npm 
* node_modules > .bin > .eslintrc.js
  * 어떤 에러를 내게 할 것인지 지정하는 파일

## 작업
* styled-components 설치