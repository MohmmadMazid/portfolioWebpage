import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiMiniArrowUpOnSquare } from "react-icons/hi2";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="aboutme">
        <h1>About Me</h1>
      </div>
      <div className="aboutcontainer">
        <div>
          <img src="/myimg.png" alt="mying"></img>
        </div>
        <div className="skills">
          <p>
            I am experineced Fullstack Developer with over a decode of
            professional expertise in the field.<br></br>I specialize in
            building scalable web applications and delivering end-to-end
            solutions,<br></br>I from frontend design to backend architecture.
            Proficient in modern frameworks and tools,<br></br>I ensuring
            seamless user experiences and robust backend systems.
          </p>
          <ul>
            <li>
              <h1>
                <HiOutlineArrowNarrowRight /> HTML&CSS
              </h1>
              <hr></hr>
            </li>
            <li>
              <h1>
                <HiOutlineArrowNarrowRight /> JAVASCRIPT
              </h1>
              <hr></hr>
            </li>
            <li>
              <h1>
                <HiOutlineArrowNarrowRight /> NODEJS
              </h1>
              <hr></hr>
            </li>
            <li>
              <h1>
                <HiOutlineArrowNarrowRight /> EXPRESSJS
              </h1>
              <hr></hr>
            </li>
            <li>
              <h1>
                <HiOutlineArrowNarrowRight /> MONGODB
              </h1>
              <hr></hr>
            </li>
            <li>
              <h1>
                <HiOutlineArrowNarrowRight /> REACTJS
              </h1>{" "}
              <hr></hr>
            </li>
            <li>
              <h1>
                <HiOutlineArrowNarrowRight /> SQL
              </h1>
              <hr></hr>
            </li>
            <li>
              <h1>
                <HiOutlineArrowNarrowRight /> C&C++
              </h1>
              <hr></hr>
            </li>
          </ul>
        </div>
      </div>
      <div className="aboutExperience">
        <div className="onediv">
          <h1
            style={{ textAlign: "center", fontSize: "xxx-large" }}
            className="achieverNumber"
          >
            1+
          </h1>
          <h1 style={{ textAlign: "center", fontSize: "xx-large" }}>
            YEARS OF EXPERIENCES
          </h1>
          <div className="verticalLine"></div>
        </div>
        <div className="twodiv">
          <h1
            style={{ textAlign: "center", fontSize: "xxx-large" }}
            className="achieverNumber"
          >
            10+
          </h1>
          <h1 style={{ textAlign: "center", fontSize: "xx-large" }}>
            PROJETS COMPLETED
          </h1>
          <div className="verticalLine"></div>
        </div>
        <div className="threediv">
          <h1
            style={{ textAlign: "center", fontSize: "xxx-large" }}
            className="achieverNumber"
          >
            5+
          </h1>
          <h1 style={{ textAlign: "center", fontSize: "xx-large" }}>
            HAPPY CLIENT
          </h1>
          <div className="verticalLine"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
