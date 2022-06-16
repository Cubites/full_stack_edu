# Sequelize
* 설치 : <code>npm install sequelize sequelize-cli, mysql2</code>
* 세팅 : <code>npx sequelize init</code>

### 내려받은 후 사용
1. config 폴더 생성 후 config.json 파일 생성
2. 아래 코드 작성
  > <pre>
  > {
  >   "development": {
  >       "username": "root",
  >       "password": "mysql password",
  >       "database": "db_name",
  >       "host": "localhost",
  >       "dialect": "mysql"
  >   },
  >   "test": {
  >       "username": "root",
  >       "password": null,
  >       "database": "database_test",
  >       "host": "127.0.0.1",
  >       "dialect": "mysql"
  >   },
  >   "production": {
  >       "username": "root",
  >       "password": null,
  >       "database": "database_production",
  >       "host": "127.0.0.1",
  >       "dialect": "mysql"
  >   }
  > }
  >