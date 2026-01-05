/* eslint-disable no-unused-vars */
import React from "react";

function Testimonials() {
  return (
    <>
      <div className="container bg-light my-5">
        <div className="row mb-8 justify-content-center">
          <div className="col-lg-6 col-md-12 col-12 text-center">
            <p className="lead">
              12+ million people are already learning on Geeks
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 mb-4 mb-lg-0">
            <div className="card shadow-lg">
              <div className="card-body p-4 p-md-8 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-quote text-light-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <p className="lead text-dark mt-3">
                  The generated lorem Ipsum is therefore always free from
                  repetition, injected humour, or words etc generate lorem Ipsum
                  which looks racteristic reasonable.
                </p>
              </div>
              <div className="card-footer bg-primary text-center border-top-0">
                <div className="mt-n8">
                  <img
                    src="./avatar_on_home.png"
                    alt="avatar"
                    className="rounded-circle border-primary avatar-xl border border-4"
                  />
                </div>
                <div className="mt-2 text-white">
                  <h3 className="text-white mb-0">Gladys Colbert</h3>
                  <p className="text-white-50 mb-1">
                    Software Engineer at Palansite
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="card shadow-lg">
              <div className="card-body p-4 p-md-8 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-quote text-light-info"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
                <p className="lead text-dark mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed
                  vel felis imperdiet, lacinia metus malesuada diamamus rutrum
                  turpis leo, id tincidunt magna sodales.
                </p>
              </div>
              {/* Card Footer */}
              <div className="card-footer bg-info text-center border-top-0">
                <div className="mt-n8">
                  <img
                    src="/avatar_on_home.png"
                    alt="avatar"
                    className="rounded-circle border-info avatar-xl border border-4"
                  />
                </div>
                <div className="mt-2 text-white">
                  <h3 className="text-white mb-0">Ella Jones</h3>
                  <p className="text-white-50 mb-1">
                    Software Engineer at Classroom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
