



SELECT e.employee_id
FROM employees e
LEFT JOIN salaries s ON e.employee_id = s.employee_id
WHERE s.salary IS NULL

UNION ALL

SELECT s.employee_id
FROM salaries s
LEFT JOIN employees e ON e.employee_id = s.employee_id
WHERE e.name IS NULL

ORDER BY employee_id asc;
;

