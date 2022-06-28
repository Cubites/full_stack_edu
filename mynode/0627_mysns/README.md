* 사용 모듈
  * sequelize 
  * mysql2
  * sequelize-cli
  * express
  * cookie-parser
  * morgan : 로그를 볼 때 사용
  * multer
  * dotenv
  * nunjucks
  * express-session
  * (path는 기본적으로 있으니 설치 X)
  * 암호화 모듈
    * passport 
    * passport-local
    * passport-kakao
    * bcrypt

* npx sequelize init : 폴더 셋팅

* config/config.json
    > {
    >   "development": {
    >     "username": "root",
    >     "password": null,
    >     "database": "database_development",
    >     "host": "127.0.0.1",
    >     "dialect": "mysql"
    >   },
    >   "test": {
    >     "username": "root",
    >     "password": null,
    >     "database": "database_test",
    >     "host": "127.0.0.1",
    >     "dialect": "mysql"
    >   },
    >   "production": {
    >     "username": "root",
    >     "password": null,
    >     "database": "database_production",
    >     "host": "127.0.0.1",
    >     "dialect": "mysql"
    >   }
    > }
