

-- # Write your MySQL query statement below


select name as Customers from customers where not exists (select customerId from orders where orders.customerId=customers.id );