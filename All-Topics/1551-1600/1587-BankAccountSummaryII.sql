

select name, sum(amount)as balance
from users
inner join Transactions on users.account=Transactions.account
group by users.account,users.name
having balance>10000;