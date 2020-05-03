import React, {useState, useEffect} from 'react';
import MovieContext from './utils/MovieContext';
import MovieCard from './components/movieCard';
import axios from 'axios';


function App() {

  const [movieState, setMovieState] = useState({
    search: '',
    queryMovies: [],
    savedMovies: []
  })

  movieState.handleInputChange = (event) => {
    setMovieState({...movieState, [event.target.name]: event.target.value});
  }

  movieState.handleQueryMovie = event => {
    event.preventDefault();
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&s=${movieState.search}`)
    .then(function({data}){
      if(data.Response == 'True')
      setMovieState({...movieState, search: '', queryMovies: data.Search})
    })
    .catch(e => console.error(e));
  }

  
  
  return (
    <MovieContext.Provider value={movieState}>
      <MovieCard />
    </MovieContext.Provider>
  );
}

export default App;
