select host, user from mysql.user;
create user 'testid'@'%'identified by '123456';
grant all privileges on study01.* to 'testid'@'localhost';
drop user 'testid'@'%';

-- root 계정에 접근 권한 허용
grant all privileges on *.* to root@localhost;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY '123456';
flush privileges;

show variables like 'validate_password%';

select * from mysql.user;