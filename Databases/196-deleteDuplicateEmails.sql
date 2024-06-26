DELETE FROM person
WHERE id NOT IN (
    SELECT id
    FROM (
        SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS row_num
        FROM person
    ) AS duplicates
    WHERE row_num = 1
);