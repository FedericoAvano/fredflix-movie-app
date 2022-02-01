import React from "react";
import { Paper, Card, CardContent, CardActions } from "@material-ui/core";
import DetailModal from "./DetailModal";

const MovieBox = ({ movie, id }) => {
  // tramite il prop drilling, con la destrutturazione, all'interno del componente sarà possibile ricevere in modo dinamico le immagini ed i titoli dei film in base al path restituito dalla API CALL
  return (
    <Paper key={id}>
      <Card className="movie-box">
        <CardContent className="overlay">
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title}`}
          />

          <h3>{movie.title}</h3>
          <CardActions>
            <DetailModal movie={movie} />
          </CardActions>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default MovieBox;
