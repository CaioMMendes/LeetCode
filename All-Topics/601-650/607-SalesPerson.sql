SELECT salesPerson.name from salesPerson 
LEFT JOIN orders ON salesPerson.sales_id=orders.sales_id
LEFT JOIN company on company.com_id=orders.com_id
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    INNER JOIN company c ON o.com_id = c.com_id
    WHERE o.sales_id = salesPerson.sales_id AND c.name = 'RED'
)
GROUP BY salesPerson.name

;