-- Write your PostgreSQL query statement below
SELECT id
FROM (
    SELECT id, temperature,recordDate, LAG(temperature, 1) OVER (ORDER BY recordDate) AS prev_temperature,
    LAG(recordDate, 1) OVER (ORDER BY recordDate) AS prev_record
    FROM weather
) AS subquery
WHERE prev_temperature < temperature and (prev_record::date + '1 day'::interval)=recordDate;