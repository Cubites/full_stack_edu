use sampledb;

create table member(
	id varchar(10) primary key,
    name varchar(30) not null,
    age int not null,
    address varchar(60)
);

insert into member (id, name, age, address)
	values ('dragon', '박문수', 40, '서울시'),
		   ('sky', '김윤신', 30, '부산시'),
           ('blue', '이순신', 40, '인천시');

select id, name, age, address from member where name like '%신%';