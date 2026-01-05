import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";

function Contact() {
  return (
    <>
      <Nav page="Contact" />
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            <h4>You can find us at</h4>
            <div className="">
              <h6>EMAIL</h6>
              <p>hello@tyler.com</p>
            </div>
            <div>
              <h6>PHONE NUMBER</h6>
              <p>202-555-0188</p>
            </div>
            <div>
              <h6>LOCATION</h6>
              <p>2360 Hood Avenue, San Diego, CA, 92123</p>
            </div>
            <div className="h1">
              <i className="fa-brands fa-twitter px-1 mx-1"></i>
              <i className="fa-brands fa-instagram px-1 mx-1"></i>
              <i className="fa-brands fa-youtube px-1 mx-1"></i>
            </div>
          </div>
          <div className="col-6">
            <h4>Lets get in touch</h4>
            <div className="py-5 mx-2">
              <input
                type="text"
                placeholder="Your Name"
                className="border-1 col-7"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border-1 col-7 my-3"
                required
              />
              <textarea
                name="Message"
                id=""
                placeholder="Message"
                className="border-1 col-7 my-1"
                required
              ></textarea>
              <br />
              <button className="bg-warning">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="align-items-center text-center ">
          <h3>We are optimists who love to work together</h3>
        </div>
        <div className="row px-3">
          <div className="col-3 px-2">
            <img src="./avatar_1.jpg" alt="" />
          </div>
          <div className="col-3 px-2">
            <img src="./avatar_2.jpg" alt="" />
          </div>
          <div className="col-3 px-2">
            <img src="./avatar_3.jpg" alt="" />
          </div>
          <div className="col-3 px-2">
            <img src="./avatar_4.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
