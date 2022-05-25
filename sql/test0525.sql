use sampledb;

create table SQLD_3 (N1 int, N2 int);
insert into SQLD_3 values (1, 100);
insert into SQLD_3 value (2, 200);

select * from sqld_3 order by n1, 2 desc;

create table testnum (a int, b int, c int, d char(10), e char(10));
insert into testnum (a, b, c, d) values
	(1, null, 3, null),
    (1, 1, null, 4),
    (1, null, 3, null),
    (1, null, 3, 4);
select sum(a) + sum(b) + sum(c) + sum(d) from testnum;

drop table testnum;
truncate testnum2;
create table testnum (a int, b int, c char(10), d char(10));
insert into testnum (a, b, c, d) values
(1, null, 'A', null),
(2, 1, 'B', 'A'),
(4, 2, 'D', 'B'),
(5, 3, 'E', 'D'),
(3, 1, 'C', 'A');

select c, d, a, b from testnum where a=4 start with b is null connect by prior a = b;
select c, d, a, b from testnum = 

create table testnum (a int);
insert into testnum values (1), (2), (3), (4);
select count(*) from testnum having count(*) > 4;

create table test (a char(10));
insert test values('A'), ('a');
select * from test where a like 'A%';

drop table sqld_3;

create table test1(col1 int);
insert test1 values (1), (1), (1), (2), (2), (3), (5), (6);
create table test2(col1 int);
insert test2 values (1), (2), (2), (4), (5);
select distinct col1 col1 from test1 union all select col1 from test2;



drop table Student_Course;

create table Student_Course(
	student_id char(20) unique,
    course_id char(10) unique
);
create table Course(
	course_id char(10) primary key,
    course_name char(20),
    professor_id char(10) unique,
    start_date date,
    end_date date,
    foreign key (course_id)
    references Student_course (course_id)
);
create table Student(
	student_id char(20) primary key,
    student_name char(10),
    height int,
    department_id char(10) unique,
    foreign key (student_id) references Student_course (student_id)
);
create table Professor(
	professor_id char(10) primary key,
    professor_name char(10),
    department_id char(10) unique,
    foreign key (professor_id) references Course (professor_id)
);
create table Department(
	department_id char(10) primary key,
    department_name char(20),
    foreign key (department_id) references Professor (department_id),
    foreign key (department_id) references Student (department_id)
);
