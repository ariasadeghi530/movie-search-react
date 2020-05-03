import React, {createContext} from 'react';

const MovieContext = createContext({
    search: '',
    queryMovies: [],
    savedMovies: [],
    handleInputChange: () => {},
    handleQueryMovies: () => {}
});

export default MovieContext;