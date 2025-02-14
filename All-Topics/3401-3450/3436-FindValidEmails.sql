

select user_id,email 
from users
where email REGEXP '^[a-zA-Z0-9_]+@[a-zA-Z]+\\.com$'
order by user_id asc;