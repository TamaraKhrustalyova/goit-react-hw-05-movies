import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { fetchMovies } from 'Api/fetchMovies';

const Cast = () => {
    const {movieId} = useParams();
    const [credits, setCredits] = useState([]);
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        async function MovieCredits() {
            try {
                const {data: {cast}} = await fetchMovies.getCredits(movieId)
                setCredits([...cast])
            } catch {
                console.error(new Error())
            }
        }
        MovieCredits()
    }, [credits, movieId])

    return (
        <> 
            <ul>
                {credits?.map(({credit_id, name, character, profile_path}) => (
                    <li key={credit_id}>
                        <img src={baseImgUrl + profile_path} alt=''></img>
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </li>
                ))}
            </ul>
        </>
    )

};

export default Cast;
