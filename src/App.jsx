import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <div>
        <div className="justify-content-center">
          <h1>Our Services</h1>
        </div>
        <div className="container d-flex">
          <div className="row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      {/* <div style={{height:"450px"}} className="row bg-light">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-secondary">
          <p>
            “Original and with an innate understanding of their customers
            needs, the team at Love Nature are always a pleasure to work with.”
          </p>
        </div>
        <div className="col-lg-3"></div>
      </div> */}

      <div className="container">
        <div className="row mb-8 justify-content-center">
          <div className="col-lg-6 col-md-12 col-12 text-center">
            {/* caption */}
            <span className="text-primary mb-3 d-block text-uppercase fw-semibold ls-xl">
              Testimonials
            </span>
            <h2 className="mb-2 display-4 fw-bold ">
              What our learners are saying{" "}
            </h2>
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

      <div className="container">
        <div className="row p-5">
          <div className="col-lg-7 p-5">
            <div className="text-muted py-3">About us</div>
            <div className="text-dark">
              <h2>
                Tell website visitors who you are and why they should choose
                your business.
              </h2>
            </div>
            <div className="text-secondary my-5">
              <h4>
                Because when a visitor first lands on your website, youre a
                stranger to them. They have to get to know you in order to want
                to read your blog posts, subscribe to your email newsletter, or
                buy what youre selling.
              </h4>
            </div>
            <div>
              <button type="button" className="btn btn-outline-secondary">
                Find Out More
              </button>
            </div>
          </div>
          <div className="col-lg-5 p-5">
            <img src="/leaf.jpg" alt="" height="450px" />
          </div>
        </div>
      </div>

      <Header />
      <div className="row">
        <div className="col-lg-5">
          <ul
            style={{ listStyle: "none", height: "70px", alignItems: "center", textAlign:"center" }}
            className="d-flex px-3 mx-3"
          >
            <li className="px-2 mx-2">Home</li>
            <li className="px-2 mx-2">About</li>
            <li className="px-2 mx-2">Services</li>
            <li className="px-2 mx-2">Contact</li>
          </ul>
        </div>
        <div style={{alignItems:"center", textAlign:"center"}} className="col-lg-5">Love Nature by Tyler Moore</div>
      </div>
    </>
  );
}

export default App;
