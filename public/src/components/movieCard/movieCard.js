import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MovieContext from '../../utils/MovieContext';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function MovieCard(){
const {queryMovies} = useContext(MovieContext);
  const classes = useStyles();

return(
    <Container>
    {queryMovies.map(movie => 
        <Card className={classes.root}>
        <CardActionArea>
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
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            View on IMDB
          </Button>
        </CardActions>
      </Card>
        )}
    </Container>
   
)
}


export default MovieCard;