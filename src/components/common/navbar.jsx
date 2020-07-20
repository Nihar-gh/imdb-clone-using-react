import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../logo.svg";
import "../../stylesheets/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="imdb-logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myid"
        aria-controls="myid"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="myid">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item pad-left">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item pad-left">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="nav-item pad-left">
            <NavLink className="nav-link" to="/shows">
              Tv Shows
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2 search-box"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </li>
          <li className="nav-item pad-left last">
            <div className="behind" />
            <div className="front">
              <NavLink className="nav-link sign-in" to="/signin">
                Sign In
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;