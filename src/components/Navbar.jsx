import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // la navbar costituisce l'header della web app
  return (
    <div className="navbar">
      <div className="logo">FredFlix MovieApp</div>
      <div className="menus">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
