use mysql;
show tables;
select * from user;
select password from user;
select authentication_string from user;
desc user;

grant all privileges on *.* to 'root'@'localhost' identified by password '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9' with grant option;


create user 'testid'@'%'identified by '123456';
drop user 'testid'@'%';

grant all privileges on *.* to 'testid'@'%' identified by password '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9' with grant option;
grant select on study01.* to 'testid'@'%' identified by '123456';
flush privileges;