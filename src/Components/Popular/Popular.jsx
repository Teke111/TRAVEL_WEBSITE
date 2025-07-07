import React, { useEffect } from "react";
import "./popular.scss";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { data } from "../../Data";

import Aos from "aos";
import "aos/dist/aos.css";

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        {/* =================== */}
        <div className="secHeader flex">
          {/* TEXT */}
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specteculas, come see the est of
              the world!
            </p>
          </div>

          {/* ARROW */}
          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        {/* ================== */}
        <div className="mainContent grid">
          {data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" className="singleDestination" key={id}>
                <div className="destImage">
                  <img src={imgSrc} alt="Image title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>

                    <p>{location}</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="singleDestination">
            <div className="destImage">
              <img src={img2} alt="Image title" />


              <div className="overlayInfo">
                <h3>Some text</h3>

                <p>Lorem ipsum dolor sit amet.</p>

                <BsArrowRightShort className="icon" />
              </div>


            </div>

            <div className="destFooter">
              <div className="number">01</div>


              <div className="destText flex">
                <h6>London</h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Popular;
