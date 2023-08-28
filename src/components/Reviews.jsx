import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { fetchMovies } from 'Api/fetchMovies';

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        async function MovieReviews() {
            try {
                const {data: {id, results}} = await fetchMovies.getReviews(movieId)
                setReviews({id, results})
            } catch {
                console.error(new Error())
            }
        }
        MovieReviews()
    }, [reviews, movieId])

    const {results} = reviews;

    return (
        <>
         {!results?.length && <p>We don't have any reviews for this movie</p>}
         <ul>
            {results?.map(({id, author, content}) => (
                <li key={id}>
                    <h2>{author}</h2>
                    <p>{content}</p>
                </li>
            ))}
         </ul>
        </>
    )
};

export default Reviews;