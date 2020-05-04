import React, {useState, useEffect} from 'react';
import MovieContext from './utils/MovieContext';
import MovieCard from './components/movieCard';
import Search from './components/searchBar';
import axios from 'axios';


function App() {

  const [movieState, setMovieState] = useState({
    search: '',
    error: '',
    queryMovies: [],
    savedMovies: []
  })

  movieState.handleInputChange = (event) => {
    setMovieState({...movieState, [event.target.name]: event.target.value});
  }

  movieState.handleQueryMovies = (event) => {
    event.preventDefault();
  
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&s=${movieState.search}`)
    .then(function({data}){
      if(data.Response == 'True'){
        console.log(data);
        setMovieState({...movieState, search: '', queryMovies: data.Search});
      } else {
        setMovieState({...movieState, error: data.Error});
      }
    })
    .catch(e => console.error(e));
  }

  
  
  return (
    <MovieContext.Provider value={movieState}>
      <Search />
      <MovieCard />
    </MovieContext.Provider>
  );
}

export default App;
