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