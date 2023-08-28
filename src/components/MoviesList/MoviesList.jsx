import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import {MovieItem, MovieLink, MovieList } from './MoviesList.styled'



const MoviesList = ({movies}) => {
    const location = useLocation();
    return (
        <>
         <MovieList>
            {movies.map(({id, title}) => {
                return (
                    <MovieItem key={id}>
                       <MovieLink to={`/movies/${id}`} state={{from : location}}>{title}</MovieLink>
                    </MovieItem>
                )
            }          
            )}
         </MovieList>
        </>
    )
};

export default MoviesList;

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}