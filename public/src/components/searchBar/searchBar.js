import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MovieContext from '../../utils/MovieContext';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        
        },
       
    },
    
}));

function Search() {
    const classes = useStyles()
    const {handleInputChange, handleQueryMovies, search} = useContext(MovieContext);
    return (
        <Container>
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
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton  variant="contained" size="small" onClick={(e) => handleQueryMovies(e)}>
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                )
            }}
             />
             
        </form>
        </Container>
    )
}

export default Search;