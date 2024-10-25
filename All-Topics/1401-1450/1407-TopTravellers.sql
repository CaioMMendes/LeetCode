select name, COALESCE(SUM(rides.distance), 0) as travelled_distance from users left join rides on users.id=rides.user_id
GROUP BY users.id
ORDER BY travelled_distance DESC,name asc;