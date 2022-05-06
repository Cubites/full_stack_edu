show databases; -- 데이터베이스를 보여줌
use world; -- world를 사용
show tables; -- 테이블들의 보여줌
desc city;

-- 1. 국가코드가 'KOR'인 도시들을 표시하시오.
select name from city where countryCode = 'KOR';

-- 2. 국가코드가 'KOR'인 도시들의 국가코드를 표시하되 중복을 제거하시오.
select distinct countryCode from city where countryCode = 'KOR';

-- 3. 국가코드가 'KOR'이면서 인구가 100만 이상인 도시
select name from city where countryCode = 'KOR' and population >= 1000000;

-- 4. 국가코드가 'KOR', 'CHN', 'JPN'인 도시
select * from city where countryCode = 'KOR' or countryCode = 'CHN' or countryCode = 'JPN';
select * from city where countryCode in ('KOR', 'CHN', 'JPN');

-- 5. 국가코드가 'KOR'가 아니면서 인구가 100만 이상인 도시
select * from city where countryCode != 'KOR' and population >= 1000000;

-- 6. 국가코드가 'KOR'이면서 인구가 100만 이상 500만 이하인 도시;
select * from city where countryCode = 'KOR' and population >= 1000000 and population <= 5000000;
select * from city where countryCode = 'KOR' and population between 1000000 and 5000000;

-- 정렬 오름차순 acs / 내림차순 desc
select * from city where countryCode = 'KOR' and population between 1000000 and 5000000 order by population desc;