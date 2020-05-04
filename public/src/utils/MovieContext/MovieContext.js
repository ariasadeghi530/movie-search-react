import React, {createContext} from 'react';

const MovieContext = createContext({
    search: '',
    error: '',
    queryMovies: [],
    savedMovies: [],
    handleInputChange: () => {},
    handleQueryMovies: () => {},
    handleDeleteMovie: () => {}
});

export default MovieContext;