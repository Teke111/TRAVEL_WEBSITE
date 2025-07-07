import React, { useEffect } from "react";
import "./Blog.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { Posts } from "../../Data";

import Aos from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>

          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>

                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                    {desc}{" "}
                  </p>
                </div>

                <a
                  href="#"
                  className="flex"
                  data-aos="fade-up"
                  data-aos-duration="4500"
                >
                  <BsArrowRightShort /> Read More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
