



-- ? Esse exercício é zoado se usar >= da erro na hora de ver o total de copias

# Write your MySQL query statement below
select l.book_id,title, author,genre, publication_year ,COUNT(CASE WHEN b.return_date IS NULL THEN 1 END) AS current_borrowers
from library_books l
inner join borrowing_records b on b.book_id=l.book_id
group by b.book_id,l.total_copies
HAVING
    COUNT(CASE WHEN b.return_date IS NULL THEN 1 END) = l.total_copies
order by current_borrowers desc,
l.title asc
;