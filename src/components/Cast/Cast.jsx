import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { fetchMovies } from 'Api/fetchMovies';
import {ActorImg, TextName, Text } from './Cast.styled'

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

    const castImgUrl = path => {
        return path ? baseImgUrl + path : `https://upload.wikimedia.org/wikipedia/commons/c/cf/Movie_star_-_actor.svg`;
    }

    return (
        <> 
        {!credits?.length && <p>We don't have cast inormation for this movie</p>}
            <ul>
                {credits?.map(({credit_id, name, character, profile_path}) => (
                    <li key={credit_id}>
                        <ActorImg src={castImgUrl(profile_path)} alt=''></ActorImg>
                        <TextName>{name}</TextName>
                        <Text>Character: {character}</Text>
                    </li>
                ))}
            </ul>
        </>
    )

};

export default Cast;
