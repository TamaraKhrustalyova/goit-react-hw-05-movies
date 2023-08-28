import { Suspense, useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom'; 
import { fetchMovies } from 'Api/fetchMovies';
import {GoBack, MovieWrapper, MoviePoster, GenresList, StyledLink, ExtraListItem, ExtraTitle, ExtraList } from './MovieDetails.styled'


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

    const posterUrl = path => {
        return path ? basePosterUrl + path : `https://upload.wikimedia.org/wikipedia/commons/4/4d/3D_film_2.svg`
    }

    if (!movieInfo) return;

    const {poster_path, title, release_date, genres, vote_average, overview} = movieInfo;

        return (
            <>

            <div className='container'>
                 <GoBack to={backLinkLocation.current}>
                    Go back
                </GoBack>
                
                <MovieWrapper>
                   <MoviePoster src={posterUrl(poster_path)} alt=''></MoviePoster>
                   <div>
                        <h1>{title} ({new Date(release_date).getFullYear()})</h1>
                        <p>User score: {`${Math.round(vote_average * 10)}%`}</p>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                        <h2>Genres</h2>
                        {genres?.map(g => <GenresList>{g.name}</GenresList>) } 
                   </div>
                </MovieWrapper>
            </div>
        
            <div className='container'>
                <ExtraTitle>Additional information</ExtraTitle>
                <ExtraList>
                    <ExtraListItem>
                        <StyledLink to="cast">Cast</StyledLink>
                    </ExtraListItem>
                    <ExtraListItem>
                        <StyledLink to="reviews">Reviews</StyledLink>
                    </ExtraListItem>
                </ExtraList>
            
                 <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
                    <Outlet />
                </Suspense>
            </div>   
               
            </>
        )
    };

export default MovieDetails;