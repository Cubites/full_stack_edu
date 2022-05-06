show databases; -- 데이터베이스를 보여줌
use world; -- world를 사용
show tables; -- 테이블들의 보여줌
desc city;
select * from city;
select Name from city where CountryCode = "KOR";
select Name, CountryCode from city where Population >= 5000000;

insert into city (id, Name, CountryCode, District, Population) values (10000, 'Gimpo', 'KOR', 'Gyeonggi', 485647);
select * from city where id = 10000;
insert into city values (20000, 'Goyang', 'KOR', 'Gyeonggi', 1000000);
select * from city where id = 20000;

update city set id = 10001, population = 485700 where id = 10000;
select * from city where id = 10001;

delete from city where id = 20000;
select * from city where id = 20000;