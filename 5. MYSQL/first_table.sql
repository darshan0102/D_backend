-- \sql

-- \connect root@localhost:3306

-- show databases;

-- create databases clint_master;

-- use clint_master;

create table clint_master(
    ClintNo varchar(20),
    Cname varchar (50),
    City varchar(30), 
    pincode int,
    Cstate varchar(50),
    Baldue int
);

-- describe clit_master;
-- desc clit_master;

insert into clint_master (Clintno,Cname,City,pincode,Cstate,Baldue) 
values ('C001','darshan','surat',395010,'gujrat',330000),
value  ('C002','vijay','ranghola',506030,'dubai',10);


-- select*from clint_master