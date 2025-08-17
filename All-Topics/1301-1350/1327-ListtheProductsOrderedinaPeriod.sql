select  product_name,SUM(orders.unit) AS unit from products
inner join orders
on products.product_id=orders.product_id
where order_date>='2020-02-01' and order_date<='2020-02-29' 
group by products.product_name
having unit>=100


;



