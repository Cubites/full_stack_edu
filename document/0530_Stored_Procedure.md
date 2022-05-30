# Stored Procedure
## Stored Procedure
* 저장 프로시저 : SQL을 함수 형태로 저장하고 사용하는 방법
* 생성
  > <pre>
  > delimiter $$
  > create procedure 프로시저명(인자, 인자, ...)
  > begin
  >   쿼리문 ...
  > end 
  > delimiter $$
  > </pre>
* 실행
  > <pre>
  > call 프로시저명;
  > </pre>
* 삭제
  > <pre>
  > drop procedure 프로시저명;
  > </pre>

## Stored Function (저장함수)
* SQL을 함수형태로 저장하고 사용하는 방법
* 생성
  > <pre>
  > create function 함수명(인자 인자형, 인자 인자형, ...) returns 타입
  > begin
  >   쿼리문 ...
  > end
  > </pre>
* 호출
  > <pre>
  > 함수명(인자);
  > </pre>
* 삭제
  > <pre>
  > drop function 함수명;
  > </pre>
* 예
  > <pre>
  > delimiter $$
  > create function CountLines() returns integer
  > begin
  >   declare line_count integer;
  >     select count(*) into line_count from city;
  >     return line_count;
  > end $$ delimiter ;
  > </pre>

## Trigger (트리거)
* 특정한 조건이 되면 자동으로 호출(Callback)되는 저장 프로시저
* 사용 경우: 회원탈퇴한 유저의 정보를 N년간 저장할 때 자동으로 정보를 이동
* 예
  > <pre>
  > create trigger 트리거명 defore (토는 after) CRUD on 테이블명
  > begin
  >   변경전(OLD 컬럼명) 또는 변경 후 (NEW 컬럼명)을 이용한 처리
  > end
  >
  > drop porocedure 삭제
  > </pre>

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