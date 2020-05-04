import {createContext} from 'react';

const MovieContext = createContext({
    search: '',
    error: '',
    queryMovies: [],
    savedMovies: [],
    handleInputChange: () => {},
    handleQueryMovies: () => {},
    handleDeleteMovie: () => {},
    handleSaveMovie: () => {},
    handleUnSaveMovie: () => {}
});

export default MovieContext;