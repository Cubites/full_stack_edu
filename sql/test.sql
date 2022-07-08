use study01;

create table test_guestbook (
	id int auto_increment primary key,
    guestName varchar(20),
    password varchar(20),
    message text
);