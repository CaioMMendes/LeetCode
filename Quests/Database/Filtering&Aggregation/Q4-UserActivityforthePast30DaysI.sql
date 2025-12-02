


select activity_date as day,
count(distinct user_id)as active_users
 from activity a
group by a.activity_date 
having activity_date between
DATE_SUB('2019-07-27', INTERVAL 29 DAY) and '2019-07-27'
;