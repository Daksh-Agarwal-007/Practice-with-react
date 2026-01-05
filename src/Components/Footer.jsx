/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="row">
        <div className="col-lg-5">
          <ul
            style={{
              listStyle: "none",
              height: "70px",
              alignItems: "center",
              textAlign: "center",
            }}
            className="d-flex px-3 mx-3 col-3"
          >
            <li className="px-2 mx-2">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="px-2 mx-2">
              <Link className="nav-link active" aria-current="page" to="/About">
                About
              </Link>
            </li>
            <li className="px-2 mx-2">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Services"
              >
                Services
              </Link>
            </li>
            <li className="px-2 mx-2">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <img
          className="col-2 my-4"
          height={"50px"}
          width={"50px"}
          src="./logo-green.svg"
          alt=""
        />
        <div className="col-4 text-center align-items-center py-4 my-3">
          Love Nature by Tyler Moore
        </div>
      </div>
    </>
  );
}

export default Footer;
