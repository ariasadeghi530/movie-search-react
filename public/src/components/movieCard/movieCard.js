import React, {useContext, useEffect} from 'react';
import MovieContext from '../../utils/MovieContext';
import axios from 'axios';

function MovieCard(){
const {handleQueryMovies, queryMovies} = useContext(MovieContext);
useEffect(()=> {
   
})
return(
    <h1>Hello, World</h1>
)
}


export default MovieCard;