import React, {createContext} from 'react';

const MovieContext = createContext({
    search: '',
    error: '',
    queryMovies: [],
    savedMovies: [],
    handleInputChange: () => {},
    handleQueryMovies: () => {}
});

export default MovieContext;