import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import Portfolio from "../Components/Portfolio";
import Contect from "../Components/Contect";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="home" id="homepage">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contect />
      <Footer />
    </div>
  );
};

export default Home;
