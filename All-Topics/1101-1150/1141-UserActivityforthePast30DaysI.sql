

select activity_date as day, count( distinct user_id ) as active_users  from activity
where activity.activity_date >'2019-06-27'  and activity.activity_date <='2019-07-27' 
 group by day;