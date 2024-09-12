SELECT p.product_id,
       ROUND(
           IFNULL(SUM(p.price * IFNULL(us.units, 0)) / NULLIF(SUM(us.units), 0), 0), 
           2
       ) AS average_price
FROM prices p
LEFT JOIN unitsSold us 
    ON p.product_id = us.product_id
    AND us.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY p.product_id;