create table Salesman_master(
    SelesmanNo varchar(20),
    CName varchar(20),
    Address1 varchar(20),
    Address2 varchar(20),
    City varchar(10),
    Pincode int,
    Cstate varchar(20)
);

insert into Salesman_master (SelesmanNo,CName,Address1,Address2,City, Pincode,Cstate) values
('S00001','Aman','A/14','Worli','Mumbai',400002,'Maharashtra'),
('S00002','Omkar','65','Nariman','Mumbai',400001,'Maharashtra'),
('S00003','Aman','P-7','bandra','Mumbai',400032,'Maharashtra'),
('S00004','Aman','A/15','Juhu','Mumbai',400044,'Maharashtra');