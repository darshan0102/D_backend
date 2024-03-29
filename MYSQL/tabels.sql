select sod.*, cm.Cname, pm.Description from sales_orderDetail sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.productno = pm.productno where CName = "Ivan Bayross"; -- 1

SELECT sod.ProductNo, pm.Description, sod.QtyOrdered, sod.QtyDisp, so.OrderDate
FROM sales_order so
JOIN sales_orderDetail sod ON so.OrderNo = sod.OrderNo
JOIN product_master pm ON sod.ProductNo = pm.ProductNo
WHERE MONTH(so.DelyDate) = MONTH(CURRENT_DATE()) AND YEAR(so.DelyDate) = YEAR(CURRENT_DATE()); -- 2

select distinct pm.ProductNo , pm.Description from sales_orderdetail sod 
inner join product_master pm on pm.ProductNo = sod.productNo;  -- 3

select sod.*, cm.Cname, pm.ProductNo , pm.Description from sales_orderDetail sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.productno = pm.productno where Description = "Trousers"; -- 4

SELECT so.OrderNo, c.CName, p.Description, sod.QtyOrdered
FROM sales_orderDetail sod
JOIN sales_order so ON sod.OrderNo = so.OrderNo
JOIN client_master c ON so.ClientNo = c.ClientNo
JOIN product_master p ON sod.ProductNo = p.ProductNo
WHERE p.Description = 'Pull Overs' AND sod.QtyOrdered < 5; -- 5

select sod.*, cm.Cname, pm.Description from sales_orderDetail sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.productno  pm.productno where cm.CName in ('Ivan Bayross','Mamta Muzumdar');-- 6

select sod.*, cm.Cname, pm.Description from sales_orderDetail sod
inner join sales_order so on so.OrderNo = sod.OrderNo
inner join client_master cm on so.ClientNo = cm.ClientNo
inner join product_master pm on sod.productno = pm.productno where cm.ClientNo in ('C00001','C00002'); -- 7