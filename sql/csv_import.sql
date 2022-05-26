use study01;

create table nation_location (
    시군명 char(10),
    관광정보명 char(30),
    소재주소 char(100),
    전화번호 char(20),
    데이터기준일자 char(20),
    정제WGS84위도 char(50),
    정제WGS84경도 char(50)
);

show variables like 'secure_file%';

load data infile 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/location.csv'
	into table nation_location
	fields terminated by ','
	enclosed by '"' escaped by '\\' lines starting by '' terminated by '\n'
    ignore 1 rows;

select * from nation_location;

create table restaurant_gy (
	id int unsigned auto_increment not null primary key,
    sigun varchar(10),
    title char(100),
    address varchar(100),
    address_old varchar(100),
    grade varchar(5),
    grade_date date,
    orgaization varchar(5),
    latitude varchar(15),
    longitude varchar(15)
) engine=InnoDB;
desc restaurant_gy;

truncate restaurant_gy;
load data infile 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/rest.csv'
	into table restaurant_gy
	fields terminated by ',' -- 필드 구분자
    optionally enclosed by '"' -- 데이터 필드 값이 따옴표로 구분되어 있을 수도 있음(optionally)
    Lines terminated by '\n' -- 줄 끝에서 새로 시작
    ignore 1 rows -- 첫번째 줄(컬럼명)은 load 대상에서 제외
    (sigun, title, address, address_old, grade, grade_date, orgaization, latitude, longitude);

select grade, count(*) from restaurant_gy group by grade;

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
    longitude varchar(15)
) engine=InnoDB;
desc restaurant_ggy;

truncate restaurant_gy;
load data infile 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/rest2.csv'
	into table restaurant_ggy
	fields terminated by ',' -- 필드 구분자
    optionally enclosed by '"' -- 데이터 필드 값이 따옴표로 구분되어 있을 수도 있음(optionally)
    Lines terminated by '\n' -- 줄 끝에서 새로 시작
    ignore 1 rows -- 첫번째 줄(컬럼명)은 load 대상에서 제외
    (sigun, title, tel, title_food, zip, address, address_old, latitude, longitude);

select * from restaurant_ggy;