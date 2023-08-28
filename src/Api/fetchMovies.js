import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '46dcc13616dce866cfadaff5cd9f6a02';

export const fetchMovies = {

  getTrendingMovies() {
    return axios.get(`trending/movie/day?api_key=${API_KEY}`);
  },

  getMovieDetails(id) {
    return axios.get(`movie/${id}?api_key=${API_KEY}`);
  },

 getCredits(id) {
    return axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
 },
    
 getReviews(id) {
  return axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
},

searchMovie(query) {
  return axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
},
  
};

