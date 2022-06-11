create database studydb;
use studydb;

create table restaurant_ggy (
	id int unsigned auto_increment not null primary key,
    sigun varchar(10),
    title char(100),
    tel varchar(15),
    title_food varchar(100),
    zip int,
    address varchar(100),
    address_old varchar(100),
    latitude varchar(15),
    longitude varchar(15),
    radius int default 100
) engine=InnoDB;

load data infile 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/rest2.csv'
	into table restaurant_ggy
	fields terminated by ',' -- 필드 구분자
    optionally enclosed by '"' -- 데이터 필드 값이 따옴표로 구분되어 있을 수도 있음(optionally)
    Lines terminated by '\n' -- 줄 끝에서 새로 시작
    ignore 1 rows -- 첫번째 줄(컬럼명)은 load 대상에서 제외
    (sigun, title, tel, title_food, zip, address, address_old, latitude, longitude);
    
select * from restaurant_ggy;