use world;

-- 1. city 테이블에서 국가코드가 K로 시작하는, 끝나는, K가 중간에 있는 나라의 국가 코드를 표시하시오.
select countrycode from city where countrycode like 'K%';
select countrycode from city where countrycode like '%K';
select countrycode from city where countrycode like '%_K_%';

-- 2. country 테이블에서 기대수명이 없는, 있는 국가의 개수를 표시하시오.
select count(*) from country where lifeExpectancy is NULL;
select count(*) from country where lifeExpectancy is not NULL;

-- 3. country 테이블의 기대수명의 평균값을 구하시오.
select avg(lifeexpectancy) from country;
select count(*) from country;
select avg(ifnull(lifeexpectancy, 0)) from country;

-- 4. GROUP BY
select countrycode, count(countrycode) from city group by countrycode;

-- 5. country의 name 컬럼에서 a 또는 c 또는 f가 포함된 문자열을 찾으시오.
select count(*) from country where name like '%a%' or name like '%b%' or name like '%f%';
select count(*) from country where name regexp 'a|c|f';

-- 6. 위의 컬럼에서 ar 또는 be로 시작하는 문자열을 검색하시오.
select * from country where name like 'ar%' or name like 'be%';
select * from country where name regexp '^ar|^be';

-- 7. 위의 컬럼에서 길이가 7자인 문자열 중 2번째 자리부터 aha를 포함하는 문자열을 검색하시오.
select * from country where length(name) = 7 and substring(name, 2, 3) = 'aha';
select * from country where name regexp '^.aha...$';
