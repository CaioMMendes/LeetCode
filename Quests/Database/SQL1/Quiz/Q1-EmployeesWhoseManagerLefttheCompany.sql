select e.employee_id
from employees e
left join employees m
on m.employee_id = e.manager_id
    where e.salary<30000 
    and m.employee_id is null
    and e.manager_id is not null
    order by e.employee_id
;