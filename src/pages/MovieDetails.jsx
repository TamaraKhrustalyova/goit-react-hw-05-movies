import { Link } from 'react-router-dom';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom'; 
import { fetchMovies } from 'Api/fetchMovies';


const MovieDetails = () => {

    const [movieInfo, setMovieInfo] = useState('');
    console.log(movieInfo);
    const { movieId } = useParams();
    const basePosterUrl = 'https://image.tmdb.org/t/p/w500/';
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? "/")

    useEffect(() => {
        async function MovieDetails() {
            try {
                const {data} = await fetchMovies.getMovieDetails(movieId)
                setMovieInfo({...data})
            } catch {
                console.error(new Error())
            }
        }
        MovieDetails()
    }, [movieId])


    if (!movieInfo) return;

    const {poster_path, title, release_date, genres, vote_average, overview} = movieInfo;

        return (
            <>
                <Link to={backLinkLocation.current}>
                    <button type='button'>Go back</button>
                </Link>
                
                {poster_path && <img src={basePosterUrl + poster_path} alt=''></img>}
                <h1>{title} ({new Date(release_date).getFullYear()})</h1>
                <p>User score: {`${Math.round(vote_average * 10)}%`}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                {genres?.map(g => <>{g.name}</>) }
            
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
                    <Outlet />
                </Suspense>
            </>
        )
    };

export default MovieDetails;