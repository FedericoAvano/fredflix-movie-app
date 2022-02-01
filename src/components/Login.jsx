import React, { useState } from "react";
import {
  Input,
  Typography,
  Button,
  Paper,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

//fetch del dummy token dal server locale.
// Segue il commento nel file Home.jsx

const loginUser = async (credentials) => {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
};

// Creazione di un semplice login form per iniziare il percorso all'interno dell'app, dopo la creazione di un semplice server facilmente reperibile nella folder ./utils, permetto al frontend di effettuare un fetch del dummy token creato per effettuare il test, ovviamente il token verrà restituito per qualsiasi user si voglia.
// Il token viene salvato in sessionStorage
// Segue il commento alla riga 19
const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  const classes = useStyles();
  return (
    <Paper className={classes.wrapper}>
      <h1> Please Log in to Fredflix</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <Typography>Username</Typography>
          <Input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <Typography>Password</Typography>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Paper>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
