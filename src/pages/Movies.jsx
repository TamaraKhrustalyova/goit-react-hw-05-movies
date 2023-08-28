import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import { fetchMovies } from 'Api/fetchMovies';
import MoviesList from 'components/MoviesList';

const Movies =() => {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? " ";
    const [movies, setMovies] = useState([])
    console.log(movies) 
    console.log(query)

   useEffect(() => {
    // if (!query) return;
    
    async function getMovieByQuery() {
        try {
            const {data: {results}} = await fetchMovies.searchMovie(query);
            setMovies([...results])
        } catch {
        console.error(new Error());
        }
    }
    getMovieByQuery()

   }, [query])

   const handleSubmit = (e) => {
        console.log(e)
        console.log(e.target);
        const form = e.target;
        const {query: { name, value }} = form.elements;
        setSearchParams({ [name]: value})
        console.log(name, value)
    }   

    return (
        <>
            <form onSubmit={handleSubmit}>
                 <input 
                    type="text"
                    name='query'
                />
                <button type="submit">Search</button>
            </form>
            
            {movies && <MoviesList movies={movies} />}
        </>
    )
};

export default Movies;