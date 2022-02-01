import React, { useState } from "react";
import {
  Button,
  makeStyles,
  Card,
  CardContent,
  Paper,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#313131",
    fontFamily: "Montserrat",
  },
  paper: {
    width: "400px",
    height: "580px",
    backgroundColor: "white",
    border: "2px solid light-gray",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const AddToWatchlist = ({ movies }) => {
  // Il componente avrebbe dovuto renderizzare il passaggio dalla lista degli upcoming movies all'interno di una watchlist, ma il passaggio del salvataggio delle informazioni all'interno del local storage del browser è stato implementato
  const [isAdded, setIsAdded] = useState(false);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickHandler = () => {
    setIsAdded(true);
    handleOpen();
    console.log(movies.title, "added to watchlist");
    localStorage.setItem("movies", JSON.stringify(movies.title));
  };
  return (
    <div>
      <Button style={{ cursor: "default" }} onClick={clickHandler}>
        Add to Watchlist
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        className={classes.modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <Card>
              <hr />
              <CardContent>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
                  alt={movies.title}
                />
                <h2
                  style={{
                    fontSize: "22px",
                    textAlign: "left",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                  id="transition-modal-title"
                >
                  {movies.title}
                </h2>
                <h2>Added to Watchlist</h2>
              </CardContent>
            </Card>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddToWatchlist;
