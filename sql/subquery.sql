use world;
-- 서브쿼리, 집합연산 (UNION, INTERSECT, MINUS)

select count(*) from city 
	where CountryCode = (select Code from country where Name='South Korea');

-- 예제 1. city 테이블에서 국가코드가 KOR인 도시의 평균 인구 수보다 많은 도시의 이름을 표시하라.
select name, population 
	from city 
    where population > (select avg(population) from city where countryCode = 'KOR') and countrycode = 'KOR'
    order by population desc;
    
-- 예제 2. 국가명이 South Korea, China, Japen을 찾아 해당되는 도시의 수를 각각 표시하라
select countrycode, count(countrycode) 
	from city 
    where countrycode in (select code from country where name in ('South Korea', 'China', 'Japan')) 
    group by countrycode;

-- 예제 3. 인구가 5,000,000명이 넘는 도시의 이름, 국가코드, 인구수를 표시하라
select name, countrycode, population 
	from city 
    where (name, countrycode) in (select name, countrycode from city where population > 5000000)
    order by population desc;

-- 예제 4. 한국의 모든(ALL) 도시의 인구 수보다 많은 도시를 찾아 표시하라
select * from city where population > all (select population from city where countrycode='KOR');

-- 예제 5. 한국의 어떤 도시의 인구수보다 많은 도시를 찾아 표시하라
select * from city where population > any (select population from city where countrycode='KOR');

-- KOR, CHN, JPN인 도시명, 국가코드, 인구수 출력
select name, countrycode, population from city where exists (select * from country where countrycode in ('KOR', 'CHN', 'JPN'));

-- UNION
select CountryCode from city where countryCode = 'KOR' UNION all
select CountryCode from city where CountryCode = 'CHN';

-- 예제 6. country 테이블에서 기대수명이 80세 이상인 나라와 인구가 100만 이상인 나라를 구해서 두 가지 모두 해당되는 나라를 표시하라
select * from country where lifeExpectancy >= 80 and population >= 1000000 order by population desc;
select distinct code from country where lifeexpectancy >= 80 and code in (select distinct code from country where population >= 1000000);

-- 차집합
select countrycode from city where population > 5000000 and countrycode not in (select distinct countrycode from city where countrycode='CHN');