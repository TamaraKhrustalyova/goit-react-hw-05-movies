import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/fetchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import {HomeTitle} from './Home.styled'


const Home =() => {
   const [trendMovies, setTrendMovies] = useState([]);
   
   useEffect(() => {
    async function getMovies() {
        try {
            const { data: {results} } = await fetchMovies.getTrendingMovies() 
            setTrendMovies(results)
        }
        catch {
            console.error(new Error());
        }
    }
    getMovies()
   }, [])
   
   return (
        <div className='container'> 
            <HomeTitle>Trending today</HomeTitle>
            <MoviesList movies={trendMovies}></MoviesList>
        </div>
    )
   };

export default Home;