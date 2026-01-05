import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ServicesCard from "../Components/ServicesCard";

function Services() {
  return (
    <>
      <Nav page="Services" />
      <Header />
      <ServicesCard
        img="./service-1.jpg"
        title="Web Design"
        price="From $99"
        firstdesc="Tell your visitor how your service can improve their life. Connect with the problem that theyre trying to solve and address any objections you think they might have."
        seconddesc="What is the biggest benefit your customer will get from this? Keep your target audience in mind."
      />
      <ServicesCard
        img="./service-2.jpg"
        title="Graphic Design"
        price="From $99"
        firstdesc="Tell your visitor how your service can improve their life. Connect with the problem that theyre trying to solve and address any objections you think they might have."
        seconddesc="What is the biggest benefit your customer will get from this? Keep your target audience in mind."
      />
      <ServicesCard
        img="./service-3.jpg"
        title="Content Creation"
        price="From $99"
        firstdesc="Tell your visitor how your service can improve their life. Connect with the problem that theyre trying to solve and address any objections you think they might have."
        seconddesc="What is the biggest benefit your customer will get from this? Keep your target audience in mind."
      />

      <div className="container">
        <div className="bg-light row">
          <div className="col-7 px-5">
            <h1>Why Love Nature</h1>
            <p>
              Your customers just learned what services you offer. Tell them why
              they should work with you or your team, for example you could
              highlight your experience and positive client reviews.
            </p>
            <p>
              The badges illustrate this. We also focus on key benefits they
              will get while using our services, namely quick turnaround times
              and dedicated support. You could also use them to show awards you
              won for your best work.
            </p>
          </div>

          <div className="col-5 row">
            <div className="col-6 ">
              <i className="fa-solid fa-award fs-1 d-flex justify-content-center align-items-center"></i>
              <p className="text-align-center d-flex justify-content-center align-items-center">
                8 Years Experience
              </p>
            </div>
            <div className="col-6 ">
              <i className="fa-solid fa-star fs-1 d-flex justify-content-center align-items-center"></i>
              <p className="text-align-center d-flex justify-content-center align-items-center">
                5 Star Rating
              </p>
            </div>
            <div className="col-6 ">
              <i className="fa-solid fa-rotate fs-1 d-flex justify-content-center align-items-center"></i>
              <p className="text-align-center d-flex justify-content-center align-items-center">
                Quick Turnaround
              </p>
            </div>
            <div className="col-6 ">
              <i className="fa-solid fa-life-ring fs-1 d-flex justify-content-center align-items-center"></i>
              <p className="text-align-center d-flex justify-content-center align-items-center">
                Dedicated Support
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
