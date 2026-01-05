/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import Header from "../Components/Header";
import Card from "../Components/Card";
import Nav from "../Components/Nav";
import { use, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import Products from "../Components/Products";

function Home() {
  let [arr, setArr] = useState([
    {
      title: "Web Design",
      desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      img: "./service-1.jpg",
    },
    {
      title: "Graphic Design",
      desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      img: "./service-2.jpg",
    },
    {
      title: "Content Creation",
      desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      img: "./service-3.jpg",
    },
  ]);

  let [cardData, setcardData] = useState({
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/card");
      // the response is coming from backend-integration folder
      const jsonReponse = await response.json();
      setcardData(jsonReponse);
    };
    fetchData();
  }, []);

  return (
    <>
      <Nav page="Home" />
      <Header />
      <div>
        <div className="align-items-center text-center py-5">
          <h1>Our Services</h1>
        </div>
        <div className="container d-flex px-1">
          <div className="row">
            {arr.map((item, index) => (
              <Card
                title={arr[index]["title"]}
                desc={arr[index]["desc"]}
                img={arr[index]["img"]}
              />
            ))}
          </div>
        </div>
      </div>

      <Testimonials />

      <div>
        <div className="align-items-center text-center py-5">
          <h1>Our Products</h1>
        </div>
        <div className="container d-flex px-4">
          <Products />
          <Products />
          <Products />
        </div>
      </div>

      <div className="container">
        <div className="row p-5">
          <div className="col-lg-7 p-5">
            <div className="text-muted py-3">{cardData["mainheading"]}</div>
            <div className="text-dark">
              <h2>{cardData["details"]}</h2>
            </div>
            <div className="text-secondary my-5">
              <h4>{cardData["info"]}</h4>
            </div>
            <div>
              <button type="button" className="btn btn-outline-secondary">
                Find Out More
              </button>
            </div>
          </div>
          <div className="col-lg-5 p-5">
            <img src={cardData["img"]} alt="" height="450px" />
          </div>
        </div>
      </div>

      <Header />
      <Footer />
    </>
  );
}

export default Home;
