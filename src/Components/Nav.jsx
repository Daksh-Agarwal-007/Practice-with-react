/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  let color="text-danger text-decoration-underline";
  let page= props["page"];
  

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active ${page=="Home"?color:""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active ${page=="About"?color:""}`} aria-current="page" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active ${page=="Services"?color:""}`} aria-current="page" to="/Services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active ${page=="Contact"?color:""}`} aria-current="page" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
