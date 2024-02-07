
select * from employees;

select * from employees where jobTittle = 'Sales Rep' and employeeNumber Between 1200 and 1500;

select * from employees where officeCode >=2 and jobTitle not in ('sales Rep');

select * from customers where country not in ('USA');

select * from customers where customerNumber not between 150 and 200;

select * from customers where creditLimit > 70000 order by contactFirstName desc;

select * from customers where city in ('Singapore','Liverpool','NYC');

select * from customers where contactLastName like 'smith%';

select * from customers where creditLimit between 50000 and 95000;

select * from customers where contactLastName like 's%';

select * from customers where contactLastName like 's%h';

select * from customers where contactLastName like 's____';

select * from customers where contactLastName like '_________';

select * from customers where contactLastName like 'a%e';

select * from customers where contactLastName like '%ee%';

select  JobTitle , count(*) from employees group by jobTitle;

select state, max(creditLimit) from customers group by state;