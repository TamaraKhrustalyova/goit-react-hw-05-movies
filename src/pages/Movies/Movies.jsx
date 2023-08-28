import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import { fetchMovies } from 'Api/fetchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import {SearchForm, InputItem, Button} from './Movies.styled'

const Movies =() => {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? " ";
    const [movies, setMovies] = useState([]);


   useEffect(() => {
    if (!query) return;
    
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
        e.preventDefault();
        const form = e.target;
        const {query: { name, value }} = form.elements;
        setSearchParams({ [name]: value});
        form.reset();
    }   

    return (
        <div className="container">
            <SearchForm onSubmit={handleSubmit}>
                 <InputItem 
                    type="text"
                    name='query'
                />
                <Button type="submit">Search</Button>
            </SearchForm>
            
            {movies && <MoviesList movies={movies} />}
        </div>
    )
};

export default Movies;