import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MovieContext from '../../utils/MovieContext';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
    root: {
      width: 300,
      height: 550
    },
    media: {
      height: 350,
    },
    grid:{
        margin: "2%"
        
    }
  });

function MovieCard(){
const {queryMovies, handleDeleteMovie} = useContext(MovieContext);
  const classes = useStyles();

return(
  
    <Grid
    className={classes.grid}
    container
    spacing={3}
    >
    {queryMovies.map((movie, index) => 
    <Grid item s="true" key={index}>
        <Card className={classes.root}>
        
          <CardMedia
            className={classes.media}
            image={movie.Poster}
            title={movie.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {movie.Year}
            </Typography>
          </CardContent>
       
        <CardActions>
          <Button size="small" color="primary" href={'https://www.imdb.com/title/' + movie.imdbID} target='_blank'>
            View on IMDB
          </Button>
          <Button size="small" color="primary" onClick={(index) => handleDeleteMovie(index)}>
            Remove
          </Button>
        
        </CardActions>
      </Card>
      </Grid>
        )}
    </Grid>
    
)
}


export default MovieCard;