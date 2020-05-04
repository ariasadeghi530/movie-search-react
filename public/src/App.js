import React, {useState} from 'react';
import MovieContext from './utils/MovieContext';
import MovieCard from './components/movieCard';
import Search from './components/searchBar';
import axios from 'axios';


function App() {

  const [movieState, setMovieState] = useState({
    search: '',
    error: '',
    queryMovies: [],
    savedMovies: [] || JSON.parse(localStorage.getItem('savedMovies'))
  });

  movieState.handleInputChange = (event) => {
    setMovieState({...movieState, [event.target.name]: event.target.value});
  }

  movieState.handleQueryMovies = (event) => {
    event.preventDefault();
  
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&s=${movieState.search}`)
    .then(function({data}){
      if(data.Response === 'True'){
        setMovieState({...movieState, search: '', queryMovies: data.Search});
      } else {
        setMovieState({...movieState, error: data.Error});
      }
    })
    .catch(e => console.error(e));
  }

  movieState.handleDeleteMovie = (index) => {
    let movies = JSON.parse(JSON.stringify(movieState.queryMovies));
    movies.splice(index, 1);
    setMovieState({...movieState, queryMovies: movies});
  }

  movieState.handleSaveMovie = (index) => {
    let movies = JSON.parse(JSON.stringify(movieState.queryMovies));
    let saveMovies = JSON.parse(JSON.stringify(movieState.savedMovies));
    saveMovies.push(movies[index]);
    localStorage.setItem('savedMovies', JSON.stringify(saveMovies));
    setMovieState({...movieState, savedMovies: saveMovies});
  }

  movieState.handleUnSaveMovie = (index) => {
    let saveMovies = JSON.parse(JSON.stringify(movieState.savedMovies));
    saveMovies.splice(index, 1);
    localStorage.setItem('savedMovies', saveMovies);
    setMovieState({...movieState, savedMovies: saveMovies});
  }
  
  
  return (
    <MovieContext.Provider value={movieState}>
      <Search />
      <MovieCard />
    </MovieContext.Provider>
  );
}

export default App;
