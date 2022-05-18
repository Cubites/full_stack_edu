-- mysql 기본 캐릭터셋을 확인해 보기
show databases;
use information_schema;
desc tables;

-- world / city 캐릭터셋 / 콜레이션을 각각 utf8mb4 / utf8mb4_Unicode_ci로 설정
use world;
alter database db_name
	[[default] character set 

-- sampleTestDB를 utf8mb4 / utf8mb4_Unicode_ci로 생성