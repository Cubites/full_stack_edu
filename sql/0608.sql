use study01;

create table member (
	num int auto_increment primary key,
    userid varchar(50),
    userpass varchar(50),
    username varchar(50),
    indate datetime default now(),
    logindate datetime default now(),
    userlevel int default 1
) charset=utf8mb4;

desc member;

insert into member (userid, userpass, username, userlevel) values
	('master', '123456', '운영자', '99'),
    ('tester', '1234', '그냥회원', '1');
    
select * from member;