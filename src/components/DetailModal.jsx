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

import InfoIcon from "@material-ui/icons/Info";

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

const AddButton = ({ movie }) => {
  // creazione di una modale che permette la visualizzazione di dettaglio di tutte le informazioni inerenti al film.
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  // When the modal is open
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <InfoIcon style={{ marginRight: "8px" }} /> SEE DETAILS
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
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
              <h2
                style={{
                  fontSize: "22px",
                  textAlign: "left",
                  fontWeight: "600",
                  textTransform: "uppercase",
                }}
                id="transition-modal-title"
              >
                {movie.title}
              </h2>
              <hr />
              <CardContent>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
                <p
                  style={{
                    fontSize: "14px",
                    textAlign: "left",
                    marginTop: "-5px",
                    color: "#313131",
                  }}
                  id="transition-modal-description"
                >
                  {movie.overview}
                  {movie.dates}
                </p>
              </CardContent>
            </Card>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddButton;
