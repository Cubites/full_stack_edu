-- 1. sampleDB 데이터베이스를 정의하시오.
create database sampleDB;
use sampledb;

-- 2. 컬럼으로 이름, 주소, 전화번호를 가지는 businessCard 테이블을 정의 하시오.
-- 단 이름, 주소, 전화번호는 varchar 최대 255자로 지정하시오.
create table businessCard(
	name varchar(255),
    address varchar(255),
    tel varchar(255)
);
desc businesscard;

-- 3. 테이블에 아래의 데이터를 넣으시오
-- Bob Gimpo Jangi 123 010-123-1234
-- John Gimpo Jangi 333 010-2233-1221
insert into businesscard (name, address, tel) 
	values ('Bob', 'Gimpo Jangi 123', '010-123-1234'), 
		   ('John', 'Gimpo Jangi 333', '010-2233-1221');
select * from businesscard;

-- 4. 테이블에 컬럼 ID int 추가
alter table businesscard add column id int;
desc businesscard;

-- 5. 컬럼명 address를 addr로 변경
alter table businesscard change address addr varchar(255);
desc businesscard;

-- 6. id 컬럼에 pk, unique 설정
alter table businesscard modify id int auto_increment primary key;
desc businesscard;

-- 7. addr에 기본값으로 'Gimpo' 설정
alter table businesscard alter addr set default 'Gimpo';
desc businesscard;

-- 8. 테이블명 businessCard 를 BCard로 변경
alter table businesscard rename BCard;

drop table bcard;
-- --------------------------------------
create table bcard(
	id int(11),
    name varchar(255),
    tel varchar(255),
    datetime datetime    
);
-- 1. id에 primary key auto_increment 추가


-- 2. name 다음에 addr(255) 추가

-- 3. datetime 기본값으로 현재 시간 추가

