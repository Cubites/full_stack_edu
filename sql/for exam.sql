-- utf8mb4 > emoji 문자도 지원함
create database exam_db default character set utf8mb4;

-- database 선택
use exam_db;

-- classinfo 테이블 생성
create table classinfo(
	class_no int,
    cname varchar(30) not null,
    reg_date date default (sysdate()),
    PRIMARY KEY(class_no)
); 

-- classinfo 테이블에 데이터 입력
insert into classinfo (class_no, cname, reg_date)
	values (10, '별님반', '20/04/08'),
		   (20, '햇님반', '20/04/08'),
           (30, '꽃님반', '20/04/08');

-- studentinfo 테이블 생성
create table studentinfo(
	id varchar(10),
    name varchar(30) not null,
    class_no int not null,
    reg_date date default (sysdate()),
    primary key(id),
    foreign key(class_no)
    references classinfo (class_no)
);

-- studentinfo 테이블에 데이터 입력
insert into studentinfo (id, name, class_no, reg_date)
	value ('dragon', '박문수', 10, '20/04/08'),
		  ('sky', '장영실', 10, '20/04/08'),
          ('blue', '홍길동', 20, '20/04/08');

select * from studentinfo;