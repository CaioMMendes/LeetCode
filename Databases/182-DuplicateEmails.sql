


SELECT Email
FROM Person
GROUP BY Email
HAVING COUNT(*) >= 2