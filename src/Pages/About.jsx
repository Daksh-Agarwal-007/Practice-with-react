import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import Testimonials from "../Components/Testimonials";

function About() {
  return (
    <>
      <Nav page="About" />
      <Header />
      <div
        style={{
          justifyContent: "center",
          margin: "50px 300px",
          textAlign: "center",
        }}
        className="row"
      >
        <h3>
          Were a highly collaborative and supportive team,
          <span>coming together on every project to ensure our </span>
          clients get the very best result.
        </h3>
      </div>

      <img
        src="./about-body-img.jpg"
        alt=""
        style={{ width: "70%", margin: "50px 200px" }}
      />

      <div className="container">
        <div
          className="row px-5"
          style={{  alignItems: "center", textAlign: "center" }}
        >
          <div
            className="col-6"
            style={{
              // width: "40%",
              textAlign: "center",
              // margin: "20px 20px",
              // padding: "20px 20px",
            }}
          >
            <div>
              <h5>Our Mission</h5>
            </div>
            <div>
              <p className="px-5">
                Build the best product that creates the most value for our
                customers, use business to inspire and implement environmentally
                friendly solutions.
              </p>
            </div>
          </div>
          <div
            className="col-6"
            style={{
              // width: "40%",
              textAlign: "center",
              // margin: "20px 20px",
              // padding: "20px 20px",
            }}
          >
            <div>
              <h5>Our Values</h5>
            </div>
            <div>
              <p className="px-5">
                We strive to go above and beyond for our clients no matter the
                challenge. We aim to deliver our very best work every single day
                across our services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <Footer />
    </>
  );
}

export default About;
