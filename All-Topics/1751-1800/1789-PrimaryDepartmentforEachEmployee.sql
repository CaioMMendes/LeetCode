select employee_id, department_id 
from employee
where primary_flag='Y'
UNION
SELECT employee_id, department_id
FROM employee
GROUP BY employee_id
HAVING COUNT(*) = 1;
; 