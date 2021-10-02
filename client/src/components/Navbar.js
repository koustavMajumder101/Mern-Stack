import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logoNav.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <NavLink className="navbar-brand columnImg" to="/">
            <img
              src={logo}
              className="logoNav"
              alt="logo image"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <span className="nav-link">
                  <NavLink
                    exact
                    className="links"
                    activeClassName="links-active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </span>
              </li>
              <li class="nav-item">
                <span className="nav-link">
                  <NavLink
                    exact
                    className="links"
                    activeClassName="links-active"
                    to="/about"
                  >
                    About
                  </NavLink>
                </span>
              </li>
              <li class="nav-item">
                <span className="nav-link">
                  <NavLink
                    exact
                    className="links"
                    activeClassName="links-active"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </span>
              </li>
              <li class="nav-item">
                <span className="nav-link">
                  <NavLink
                    exact
                    className="links"
                    activeClassName="links-active"
                    to="/signup"
                  >
                    Registration
                  </NavLink>
                </span>
              </li>
              <li class="nav-item">
                <span className="nav-link">
                  <NavLink
                    exact
                    className="links"
                    activeClassName="links-active"
                    to="login"
                  >
                    Log in
                  </NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
