



select distinct product.product_id,product_name from product
inner join sales on product.product_id=sales.product_id
where sales.sale_date>='2019-01-01' and sales.sale_date<='2019-03-31'
AND NOT EXISTS (
    SELECT 1 
    FROM sales s2
    WHERE s2.product_id = sales.product_id
      AND s2.sale_date NOT BETWEEN '2019-01-01' AND '2019-03-31'
);



