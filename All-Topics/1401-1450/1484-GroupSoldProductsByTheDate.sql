select sell_date,count(DISTINCT product) as num_sold,
GROUP_CONCAT(DISTINCT product ORDER BY product ASC) AS products
from activities
group by sell_date
order by sell_date asc;