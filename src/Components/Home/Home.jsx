import React, { useEffect } from "react";
import "./Home.scss";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          {/* FADE EFFECT */}
          <h1 data-aos="fade-up" className="title">
            Plan Your Trip With Travel Dot
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Tavel to your favourite city with respect of the environment!
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          {/* ======= 1 ======= */}
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="locationDiv"
          >
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>
          {/* ======= 1 ======= */}
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="distDiv"
          >
            <label htmlFor="distance">Location</label>
            <input type="text" placeholder="11/Meters" />
          </div>
          {/* ======= 1 ======= */}
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="priceDiv"
          >
            <label htmlFor="price">Location</label>
            <input type="text" placeholder="$140-$500" />
          </div>

          <button data-aos="fade-left" data-aos-duration="2000" className="btn">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
