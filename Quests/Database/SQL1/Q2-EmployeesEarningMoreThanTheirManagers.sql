


select m.name as Employee from employee
inner join employee m
on employee.id=m.managerid
where m.salary>employee.salary
;