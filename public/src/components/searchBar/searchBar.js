import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MovieContext from '../../utils/MovieContext';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '75%',
        },
    },
}));

function Search() {
    const classes = useStyles()
    const {handleInputChange, handleQueryMovies, search} = useContext(MovieContext);
    return (
        <form className={classes.root} noValidate autoComplete="off" 
        onSubmit={(e) => handleQueryMovies(e)}
        >
            <TextField 
            id="outlined-search"
            label="Search Movies"
            type="search"
            name="search"
            value={search}
            variant="outlined"
            onChange={handleInputChange}
             />
             <IconButton  variant="contained" onClick={(e) => handleQueryMovies(e)}>
                 <SearchIcon/>
             </IconButton>

        </form>
    )
}

export default Search;