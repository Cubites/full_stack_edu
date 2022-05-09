use world;

select * from city where countryCode = 'KOR' order by population desc limit 10;
select count(*) from city where countrycode = 'KOR';
select sum(population), avg(population), max(population), min(population) from city where countrycode = 'KOR';

select * from country;
select name, length(name) from country;
select name, upper(mid(name,1,3)) from country;
select code, round(lifeExpectancy, 0) from country;

select * from city;
select * from country;
select city.countrycode, country.gnp from country join city on country.code = city.countrycode;
select city.countrycode as Abbr, country.name as Fullname from country join city on country.code = city.countrycode where code = 'KOR';
