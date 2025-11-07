


select e.employee_id,e.name,COUNT(r.employee_id)AS reports_count,round(avg(r.age)) as average_age 
 from employees e
 left join employees r on e.employee_id=r.reports_to
group by e.employee_id
having reports_count>0
order by e.employee_id asc
;