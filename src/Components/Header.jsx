/* eslint-disable no-unused-vars */
import React from "react";

function Header() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
            style={{height:"580px"}}
              src="./bg-image-forest.jpeg
            "
              className="d-block w-100"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
