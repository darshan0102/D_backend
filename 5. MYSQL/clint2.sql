create table client2(
    ClintNo varchar(20) primary key,
    CName varchar(20),
    Address1 varchar(20),
    Address2 varchar(20),
    City varchar(20),
    Pincode int,
    Cstate varchar(15),
    Baldue int
);


insert into client2(ClintNo,CName,Address1,Address2,City,Pincode,Cstate,Baldue) values
('C001','Ivan Bayross','A/14','Worli','Mubai',400054,'Maharasta',15000),
('C002','Mamta Muzumdar','B/20','Chennai','Mubai',780001,'Tamil Nadu',0),
('C003','Chhaya Bankar','D-50','Nariman','Mubai',400057,'Maharasta',5000),
('C004','Ashwini joshi','E12','Ms','Bangalore',560001,'Karnataka',0),
('C005','Hansel colaco','C-14','Bandra','Mubai',400060,'Maharasta',2000),
('C006','Deepak Sharma','Z-10','Long street','Mangalore',560050,'Karnataka',0);


