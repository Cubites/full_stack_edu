# 사용전 필요한 수정 사항
1. index copy.html 파일의 이름을 index.html로 변경
2. 변경한 index.html 파일 8번째 줄의 "키값을넣으세요" 텍스트를 지우고 kakao developer key를 입력

# node server 실행
1. 실행
  > <pre>
  > node server.js
  > </pre>
2. 주소창에 "localhost:4000/app/hello" 입력

# mysql 정보 등록
1. db 폴더 생성 후, 안에 db.json 파일 생성
2. 파일에 다음 내용 입력
  > <pre>
  > {
  >     "host": "localhost",
  >     "user": "root",
  >     "password": "비밀번호",
  >     "port": "3306",
  >     "database": "db이름"
  > }
  > </pre>