import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MovieContext from '../../utils/MovieContext';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        
        },
       
    },
    container:{
        paddingLeft: 0
    },
    header: {
        textAlign: "center",
        marginTop: '1%',
        marginBottom: '1%'
    },
    result: {
        textAlign: 'center'
    }
}));

function Search() {
    const classes = useStyles()
    const {handleInputChange, handleQueryMovies, search, query, queryMovies} = useContext(MovieContext);
    return (
        <Container
        maxWidth="xl"
        className={classes.container}
        >
            <Typography className={classes.header}variant="h5" component="h5">Hello, World! Welcome to Aria's Movie Searcher;</Typography>
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
        {queryMovies.length > 0 ? <Typography className={classes.result}>Showing {queryMovies.length} results for "{query}" </Typography> : <></>}
        </Container>
    )
}

export default Search;