select customer_number from
(select  customer_number, count( customer_number) as counter
from orders
group by  customer_number
order by  counter desc
limit 1) as subquery;

