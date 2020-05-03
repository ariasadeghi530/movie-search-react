import React, {useContext, useEffect} from 'react';
import MovieContext from '../../utils/MovieContext';
import axios from 'axios';

function MovieCard(){
const {handleQueryMovies, queryMovies} = useContext(MovieContext);
useEffect(()=> {
    axios.get('http://www.omdbapi.com/?apikey=trilogy&s=Goodfellas')
    .then(function({data}){
        if(data.Response === 'True'){
         console.log(data.Search)
        }

    })
    .catch(e => console.error(e));
})
return(
    <h1>Hello, World</h1>
)
}


export default MovieCard;