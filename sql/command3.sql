show databases; -- 데이터베이스를 보여줌
use world; -- world를 사용
show tables; -- 테이블들의 보여줌
desc city;

-- 1. 국가코드가 'KOR'인 도시들 중 인구수가 많은 순서로 TOP 10을 표시하시오.
select * from city where countryCode = 'KOR' order by population asc limit 10;

-- 2. 'KOR'인 도시의 수
select count(*) from city where countryCode = 'KOR';

-- 2-2. 'KOR'인 도시의 인구수 총합 / 평균
select sum(population) from city where countryCode = 'KOR';
select avg(population) from city where countryCode = 'KOR';

-- 2-3. 'KOR'인 도시의 인구수 최대값 / 최소값
select max(population) from city where countryCode = 'KOR';
select min(population) from city where countryCode = 'KOR';

-- 많이 쓰이는 함수
desc country;
select * from country;
-- 1. country 테이블에서 각 레코드 name 컬럼의 글자수를 표시
select length(name), name from country;

-- 2. country 테이블에서 나라명을 앞 세글자만 대문자로 표시
select concat(upper(mid(name, 1, 3)), mid(name, 4)) from country;

-- 3. country 테이블에서 LifeExpectancy(기대수명)을 소수점 첫째자리에서 반올림하여 표시
select round(lifeexpectancy, 0) from country;

desc country;
select * from city where name = 'seoul';

-- 테이블 JOIN (INNER / LEFT / RIGIHT / FULL)
desc city;
desc country;
select * from city join country on city.countrycode = country.code;

-- 1-1. city 테이블에 국가코드가 없는 도시가 있는지 확인
select count(*) from city where countrycode is null;

-- 1.2. country 테이블에 존재하지만 도시가 하나도 없는 나라 확인
select count(*) from city left join country on city.CountryCode = country.code; -- city에 country값이 없는 것 포함
select count(*) from city right join country on city.CountryCode = country.code; -- country에 도시수가 하나도 없는 것 포함

-- alias (컬럼 별명)
select city.name as cityName, country.name as CountryName from city join country on city.countrycode = country.code;
-- alias (테이블 별명)
select A.name as cityName, B.name as CountryName from city A, country B where A.countrycode = B.code;