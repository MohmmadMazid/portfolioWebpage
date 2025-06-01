import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="latestwork">
        <h1>MY LATEST WORK</h1>
      </div>
      <div className="projects">
        <div>
          <img src="/airbnb.jpg" />
        </div>
        <div>
          <img src="/clothing.jpg" />
        </div>
        <div>
          <img src="/blogWEb.jpg" />
        </div>
        <div>
          <img src="/chatapp.jpg" />
        </div>
        <div>
          <img src="/portfolio.jpg" />
        </div>
        <div>
          <img src="/currency.png" />
        </div>
      </div>
      <button>
        Show More <HiOutlineArrowNarrowRight />
      </button>
    </section>
  );
};

export default Portfolio;
