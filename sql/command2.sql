show databases; -- 데이터베이스를 보여줌
use world; -- world를 사용
show tables; -- 테이블들의 보여줌
desc city;

select CountryCode from city where CountryCode='KOR';
select Distinct CountryCode from city where CountryCode = 'KOR';
select CountryCode from city where population > 5000000;
select Distinct CountryCode from city where population > 5000000;

select * from city where CountryCode = 'KOR' and population >= 1000000;
select * from city where CountryCode = 'KOR' or CountryCode = 'CHN' or CountryCode = 'JPN';
select * from city where CountryCode in ('KOR', 'CHN', 'JPN');
select * from city where CountryCode != 'KOR' and Population > 1000000;

-- KOR 중에서 인구가 100만 이상 500만 이하인 도시
select * from city where CountryCode = 'KOR' and population >= 1000000 and population <= 5000000;
select * from city where CountryCode = 'KOR' and (population between 1000000 and 5000000);

-- 국가코드 'KOR'인 도시를 찾아 인구수의 내림차순으로 정렬
select * from city where CountryCode = 'KOR' order by population desc;
-- city 테이블에서 국가코드와 인구수를 출력, 단 국가코드 별 오름차순, 동일한 국가코드 안에서는 인구수의 내림차순으로 정렬
select CountryCode, population from city order by CountryCode asc, population desc;