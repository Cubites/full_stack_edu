-- mysql 기본 캐릭터셋을 확인해 보기
show status;
show variables like'c%';
show variables like 'character_set_system';

-- world / city 캐릭터셋 / 콜레이션을 각각 utf8mb4 / utf8mb4_Unicode_ci로 설정
use world;
alter database world character set utf8mb4 collate utf8mb4_unicode_ci;
alter table city character set utf8mb4 collate utf8mb4_unicode_ci;

-- sampleTestDB를 utf8mb4 / utf8mb4_Unicode_ci로 생성
create database sampleTestDB default character set utf8mb4 collate utf8mb4_unicode_ci;
show databases;