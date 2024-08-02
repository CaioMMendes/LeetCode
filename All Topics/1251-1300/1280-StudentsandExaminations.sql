-- Write your PostgreSQL query statement below
select students.student_id,student_name,Subjects.subject_name,
   COUNT(examinations.subject_name) AS attended_exams
from students 
CROSS JOIN Subjects
left join examinations 
on students.student_id=examinations.student_id and subjects.subject_name=examinations.subject_name
group by (students.student_id,students.student_name,Subjects.subject_name)
order by students.student_id,Subjects.subject_name asc;

