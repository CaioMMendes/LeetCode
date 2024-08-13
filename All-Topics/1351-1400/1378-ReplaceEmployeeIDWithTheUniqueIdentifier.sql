-- Write your PostgreSQL query statement below
select EmployeeUNI.unique_id,name from employees left join employeeuni  on employeeuni.id=employees.id;