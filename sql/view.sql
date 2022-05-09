-- VIEW : SQL 쿼리 결과를 입시 테이블로 저장해서 사용하는 것
-- 주의사항 : 사용 용도가 끝나면 명시적으로 삭제해야 함
-- 생성 : CREATE VIEW 뷰이름 AS SELECT ....
-- 삭제 : CREATE VIEW 뷰이름

-- 예제 1. 국가코드가 'KOR'인 도시들의 국가코드(Abbr)와 국가명(Name)(FullName)을 뷰로 생성해 보자.
create VIEW testView as select city.countrycode as Abbr, country.name as FullName from city join country on city.countrycode = country.code where city.countrycode = 'KOR';

select * from testView;
drop view testview;

-- 예제 2. city 테이블의 내용 중에 국가코드가 'KOR' 도시만 찾아서 city_korea 테이블에 넣어라.
create table city_korea select * from city where countrycode = 'KOR';
select * from city_korea;

-- 예제 3. city_kor 테이블을 만들고 (구조까지 만들어야 함) 그 곳에 city에서 국가코드명이 kor인 도시를 찾아 넣으시오.
desc city;
create table city_kor(
	ID INT NOT NULL AUTO_INCREMENT,
    Name CHAR(35) NOT NULL DEFAULT '',
    CountryCode CHAR(3) NOT NULL default '',
    District CHAR(20) NOT NULL DEFAULT '',
    Population INT NOT NULL DEFAULT '0',
    PRIMARY KEY(ID)
); 

desc city_kor;
insert into city_kor select ID, Name, CountryCode, District, Population from city where CountryCode = 'KOR';
select * from city_kor;

-- 예제 4. city 테이블에서 도시명(Name)이 3자가 넘는 경우 앞의 세 글자만 대문자로 출력하고, 도인 인구수도 같이 출력하시오.
select case when length(name) > 3 then upper(mid(name, 1, 3))
			when length(name) <= 3 then name
            end, population from city;
            
-- 연습
CREATE TABLE plant (
	ID INT(11) NOT NULL AUTO_INCREMENT,
    Number TINYINT(4) NOT NULL,
    Kind VARCHAR(20) NOT NULL,
    PRIMARY KEY(ID) 
) DEFAULT CHARSET = utf8;
desc plant;

insert into plant values (1, 1, '사과'), (2, 1, '바나나'), (3, 2, '양상추'), (4, 3, '돼지'), (5, 3, '사슴'), (6, 4, '사람');
select * from plant;
select id ,
(
	case when id = 1 then '과일'
		when id = 2 then '채소'
        when id = 3 then '동물'
		else '인간'
        end
) as type, kind from plant;
            
