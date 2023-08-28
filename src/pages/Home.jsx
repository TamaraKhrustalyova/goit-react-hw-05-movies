import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/fetchMovies';
import MoviesList from 'components/MoviesList';


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
        <> 
            <div>Trending today</div>
            <MoviesList movies={trendMovies}></MoviesList>
        </>
    )
   };

export default Home;