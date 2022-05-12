create database sampleDB;
show databases;
use sampledb;
create table BusinessCard(
	id int(11) not null auto_increment,
	name char(5),
	address varchar(100) default 'SEOUL',
    primary key(id)
);
insert into businesscard (name, address)
	values (1, 'Bob', 'Gimpo 102-1111'),
		   (2, 'Bob2', 'Gimpo1 102-1111'),
           (3, 'Bob3', 'Gimpo2 102-1111'),
           (4, 'Bob4', 'Gimpo3 102-1111'),
           (5, 'Bob5', 'Gimpo4 102-1111'),
           (6, 'Bob6', 'Gimpo5 102-1111');
select * from businesscard;
drop table businesscard;

create table detailBusinessCard(
	id int(11) not null,
    bsId int(11) not null,
    characteristic varchar(100),
    foreign key (bsID) references BusinessCard(id)
);
insert into detailBusinessCard values (1, 2, 'Very Nice!!');
select * from detailBusinessCard;
drop table detailBusinessCard;

desc businesscard;
drop database sampledb;
show databases;

-- 예제
create database works;
use works;
create table mywork(
	no int auto_increment primary key,
    working varchar(255)
);
desc mywork;

insert mywork (working)
	value ('HTML'), ('CSS'), ('Javascript'), ('React'), ('DB');
select * from mywork;

drop table mywork;
drop database works;