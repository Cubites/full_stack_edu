show databases;
use world;
show tables;

desc city;
select * from city where countrycode='KOR';
create index City_CountryCode on city(CountryCode);

-- 인터넷을 통해 대용량 데이터를 받아서 mysql에 임포팅, (sql 쿼리)
-- 임의의 컬럼을 조회하고 소요 시간을 확인
-- 해당컬럼에 인덱스를 부여한 후 시간 차이를 확인
use bigdata;
desc sample_table;
select count(*) from sample_table;
select * from sample_table where static_string = '6Mj6JepIcqfPBIWz1vSt';
create index static_string_index on sample_table(static_string);

drop database bigdata;