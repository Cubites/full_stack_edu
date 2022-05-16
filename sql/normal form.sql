use world;

-- alter table city add column countryName varchar(255);

desc city;
select count(*) from country;
select * from city order by id desc;

-- country 테이블에 새로운 국가코드 ZZZ를 추가하고 도시 YYY를 city에 추가하자
insert into country (code, name) values ('ZZZ', 'ZZZ');
insert into city (Name, Countrycode) values ('YYY', 'ZZZ');

select * from country order by code desc;
select * from city order by countrycode desc;

delete from city where countrycode = 'ZZZ';
delete from country where code = 'ZZZ';
