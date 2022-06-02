use world;

desc city;
-- Procedure (11번)
delimiter $$
create procedure add_record()
begin
	insert into city values
		(10000, "Sample", "KOR", "TEST", 1000000),
        (20000, "SampleTest", "KOR", "TEST", 2000000);
end $$ delimiter ;
call add_record;
select * from city;
select count(*) from city;
select * from city where id = 10000 or id = 20000;
delete from city where id = 10000 or id = 20000;
drop procedure add_record;

-- Function (12번)
show global variables like 'log_bin_trust_function_creators';
SET GLOBAL log_bin_trust_function_creators = 1;
delimiter $$
create function CountLines() returns integer
begin
	declare line_count integer;
    select count(*) into line_count from city;
    return line_count;
end $$ delimiter ;
select CountLines();

-- Trigger (13번)
create table city2 select * from city;

delimiter $$
create trigger InsertDataBoth after insert on city for each row
begin
	insert ignore into city2 (select * from city where not exists (select * from city2));
end $$ delimiter ;

drop trigger InsertDataBoth;
insert into city values (5000, "test", "KOR", "test", 12345);
delete from city where id = 5000;
drop table city2;
select * from city2;
select count(*) from city2;
