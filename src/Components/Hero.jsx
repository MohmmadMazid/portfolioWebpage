import React from "react";

const Hero = () => {
  return (
    <section className="herosection" id="herosection">
      <div className="banner">
        <div className="image">
          <img src="/myimg.png" alt="myimg" />
        </div>
        <div className="intro">
          <h1 className="intro1">
            &nbsp;I'm Mohmmad Mazid, <br></br>FullStack developer.
          </h1>
        </div>
        <div>
          <p>
            I am a fullstack developer from delhi, india with 5 years of
            <br></br>
            &nbsp; &nbsp; experience in multiple companies like Apple,Google.
          </p>
        </div>
        <div className="heroBtn">
          <button>Contact With Me</button>
          <button>My Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
