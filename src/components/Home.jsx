import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";
import Pager from "./Pager";
import AddToWatchlist from "./AddToWatchlist";

// creazione del componente Home che renderizzerà la lista intera dei film in prossima uscita dopo il login.

const Home = () => {
  // creazione degli state che gestiranno il fetch dei film, ovviamente lo stato sarà un array vuoto da riempire con gli oggetti restituiti dal fetch.
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [page, setPage] = useState(1);
  // utilizzo di useEffect() che permette il fetch dei dati della lista dei film alla renderizzazione del componente. Metodo similare a ComponentDidMount() di React con i class components
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=2eeca1b6c7ffbe8d7147bf21e509c7ee&language=en-US&page=${page}`
      )
      .then(({ data }) => setUpcomingMovies(data.results))
      .catch((error) => {
        console.log(error);
      });
  }, [page, upcomingMovies]);
  //essendo upcomingMovies un array di oggetti, sarà possibile ciclarlo con il metodo .map() che permette di renderizzare un compomentente MovieBox per ogni film appartenente all'array dei film in prossima uscita
  // il pager consente il cambiamento di pagine
  return (
    <div>
      <h1>Upcoming Movies</h1>

      <Pager page={page} setPage={setPage} />
      <div className="container">
        <div className="grid">
          {upcomingMovies.map((movie, i) => (
            <div>
              <div>
                <MovieBox key={i} movieId={movie.id} movie={movie} />
              </div>
              <AddToWatchlist movies={movie} />
            </div>
          ))}
        </div>
        <Pager page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;
