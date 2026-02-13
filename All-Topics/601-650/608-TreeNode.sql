



select id, (case when p_id is null then 'Root' 
WHEN EXISTS (
            SELECT 1
            FROM tree t2
            WHERE t2.p_id = tree.id
        ) THEN 'Inner' else "Leaf" end ) as 'type'
from tree ;