-- Q. BusssinessCard 테이블에 연도 컬럼을 추가하고 파티셔닝

use sampledb;

create table BusinessCard(
    id int not null,
    name varchar(255),
    address varchar(255),
    telephone varchar(255),
    creationTime date  
);

partition by range (year(creationTime))(
   partition p0 values less than (2019), 
   partition p1 values less than (2020), 
   partition p2 values less than (2021), 
   partition p3 values less than Maxvalue
);
 -- 파티션 수정
 alter table businessCard add Partition (
   partition p4 values less than (2022)
);
-- 파티션 삭제
alter table businessCard drop partition p5;

-- 파티션 분할
alter table businessCard
	reorganize partition p4 into (
		partition p4 values less than (2022),
        partition p3 values less than maxvalue
    );

-- 파티션 병합
alter table businessCard
	reorganize partition p2, p3 into (
		partition p23 values less than (2012)
	);