use world;

desc city;
-- Procedure 예
delimiter $$
create procedure add_two()
begin
	insert into city values
		(11000, "SampleCity", "KOR", "TEST", 1000000),
        (15000, "TestCity", "KOR", "TEST", 2000000);
end $$ delimiter ;

call add_two;
delete from city where id = 11000 or id = 15000;
drop procedure add_two;
select * from city; 

-- Function 예
delimiter $$
create function CountLines() returns integer
begin
	declare line_count integer;
    select count(*) into line_count from city;
    return line_count;
end $$ delimiter ;

-- Trigger 예
delimiter $$
create trigger InsertCityTBL after insert on city for each row
begin
	insert into city2 values ('asdf', 'sdf', 'asdfasdf');
end $$ delimiter ;
