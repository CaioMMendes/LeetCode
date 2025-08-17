


-- Write your PostgreSQL query statement below
SELECT * FROM products WHERE description ~ '\mSN\d{4}-\d{4}\M'
order by product_id asc
;