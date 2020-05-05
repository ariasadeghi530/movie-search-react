import React, {useContext} from 'react';
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
      height: 550,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      
    },
    media: {
      height: 350,
    },
    grid:{
        margin: "2%",
        paddingLeft: 9
    },
  
  });

function MovieCard(){
const {queryMovies, handleDeleteMovie, handleSaveMovie} = useContext(MovieContext);
  const classes = useStyles();

return(
  <>
    
    <Grid
    className={classes.grid}
    spacing={3}
    container
    >
    {queryMovies.map((movie, ind) => 
    <Grid item s="true" key={ind} style={{display: 'flex'}}>
        <Card className={classes.root} >
        
          <CardMedia
            className={classes.media}
            image={movie.Poster === "N/A" ? ('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXs7Ox2dnbx8fFwcHDv7++CgoKsrKzl5eV7e3uzs7N+fn6GhoZ5eXnDw8PKysqDg4OSkpKLi4vn5+fa2trIyMhsbGyvr6+5ubmkpKScnJyamprW1tbQ0NC9vb3f39/29vbjQFWyAAAFxElEQVR4nO2c2XajOhBFQUhGiMEGTIwn+P+/7CoJG0hId+KbtcIVZz84BgtCbTQUYxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AlCvor47U3/KcSpVK9RnuRvb/zPINomfJXm7EVNkLfXFZCEmw81QbxFHEz0fexibz5UBLHjYPbJ91HsYOePg1h8n84vB+krrVru4WCjDkQQx5RSuYlNOhDVjsJWbefi3qIDcQuHYfRoA9+gA3ltxsyII9+ig3RMD7WdsTkHs5y6ycUWHQw5tSNqt+mgnTq4bNPBDvVAFpP+INpmfxAEZnLegKe9dyBFFczDE+PA0By3kB/Iroyy5J2EfDhvEp22kCfKytDc5q2fF63PGWm4XDdxvCBLu8eb0zxCaiBdV23juPGZC9h8cIYcS3rtoE/e9X7L+OxAzDKB2zNIKea1xWMHop4khBRlPUQputNtFjAfSPrpgIaEd9dR3GmjPm+i5jQdKDx2UEbvHGiSIMWOG0hzn4TsrYPZ4eGAqUV8acYDhQFfHfSnxauPafYwExVjH+mng9mQsExzfUTtpwNZ/8tAOBkovHTwcUhYJHtcX/DRgfgwJCxjYqfMQwf9+WsKwsgEXN5DB2J5SFiUsGcJ/jkQxRdrgZVwCDx0IL4yJEwkXKR3DkSgv+WArzB45+CLQ8JI0/Z+OSgXjhL+KSEpvXLwMnAAB3AAB3AAB3DwzoEf960f/9PzC3+5DvU/QqavV4TopRud18j5lSc47FMc59/e9B9DVPFrVF40BAAAAGCz8AOJz2/jrOEWo/GhxaG4HCblOCWfv8jJeuS00HPBdWaPOWG/VHle8CaKKn9rd3d7/bTKn8S2kKyHyZqvJ8lrsmuTm7vAVruZvMYjP9kxFApkkeeV/aQfrsEasyeldWjvvY2zrBR84+1eM2YneZ4eiK7u6us9tJPhXQQyPrjfSr7oTr+E7l4Uk6V820qos4N1esh0Zz+Z9L7CqpAqpUzH8Rp1EKQgVLq8HLTSrQji5xsNdD040G6SHFSpoUUOyhgT21+0c7BXJTswVIpniItR7IAXM9ro8/okWAf8tgLnoNK85X3f7VV4c1VZ6/HO3DFSilKbS9D3sjXm0i86UKqaONCxDG6l0us7s5Cqy9loCtc6EDk1At5GcdPWzOcOAgqyspZKFcZLDhKtaV0TB9zZGGWqXwjzr6Tq0GUqFYOD1mjX8ikU9Uk96Lnnl3VmWjtfJEYX8qODME5VWMuZg6DfmWx1r4dIVdpT4CfhHFCz7ex8+pbxDvvgwLTcw1fi+JhPdYe+LTkoNK9y5kDSYve1NQZyIKjrM3H1cOBGQdp0vehAmSzLdMyRu2BEoc2ig5rXkfdzB7PVrQRyIEVCe1emhncaDRJ2/qf1QKVlmpaxKKb14L7s4EqluWeYOMjXWQ8kf+rrwbj+YGiuSu2X+0Q3wss6dJ1mIN64iS85kLy602nWH7Qmu66wP5CBOGbqcmEHR+rp+P5rau6uy/t8XKAGxOOCpFVQjZG0JI8osqNOQA4OeKhVbw8HVFrQr+p3Av0Lrh70NoWh/IAi0wkltDet3P76PD9ItCo7IeKLsdpi6imoOlQ00lLeOTgQJ5qrBgddFedGZatrCoMDGumcA0nB632ZkgKXy3xeDwJKJk1ZUpqYcsch3jLKMEtKG1NOBGgMtKkl52BDnrjfG1rtCi9AmVDbrL4Ns9AeL9xKzuwzNbzuSx6jKJk4iKLHfpRVq6lolp3drZlUMezkhTNvWl/DDkQRZllIDkr6S+PJoVifgqAoCvu3OhaFS46D6z05Fc/T492xqJ+dmOyKohvv5+/yU5LXjyNiERfPSXktjtXjHxTUXdz47y1e5dvk5OOBNDl+mx/oSzkvP5uanxKQkxMN79br3qf3gxsOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANbAH6p6WmxEFiqyAAAAAElFTkSuQmCC') : movie.Poster  }
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
          <Button size="small" color="primary" onClick={() => handleDeleteMovie(ind)}>
            Remove 
          </Button>
          <Button size="small" color="primary" onClick={() => handleSaveMovie(ind)}>
            Save
          </Button>
        </CardActions>
      </Card>
      </Grid>
        )}
    </Grid>
    </>
)
}


export default MovieCard;