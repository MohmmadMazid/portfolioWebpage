import React from "react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services_container">
        <div className="services_head">
          <h1 style={{ textAlign: "center" }} className="serviceheading">
            MY SERVICES
          </h1>
        </div>
        <div className="my-services">
          <div className="service">
            <h1 style={{ marginBottom: "1rem" }}>01</h1>
            <h1 style={{ marginBottom: "1rem" }}>WEB DEVELOPMENT</h1>
            <p style={{ marginBottom: "1rem" }}>
              Web developemnt is the process of building, programming...
            </p>
            <h1 style={{ marginTop: "2rem" }}>
              READ MORE &nbsp; <HiOutlineArrowCircleRight />
            </h1>
          </div>
          <div className="service">
            <h1 style={{ marginBottom: "1rem" }}>02</h1>
            <h1 style={{ marginBottom: "1rem" }}>Social Media Marketing</h1>
            <p style={{ marginBottom: "1rem" }}>
              Web developemnt is the process of building, programming...
            </p>
            <h1 style={{ marginTop: "2rem" }}>
              READ MORE <HiOutlineArrowCircleRight />
            </h1>
          </div>
          <div className="service">
            <h1 style={{ marginBottom: "1rem" }}>03</h1>
            <h1 style={{ marginBottom: "1rem" }}>App Developement</h1>
            <p style={{ marginBottom: "1rem" }}>
              Web developemnt is the process of building, programming...
            </p>
            <h1 style={{ marginTop: "2rem" }}>
              READ MORE &nbsp; <HiOutlineArrowCircleRight />
            </h1>
          </div>
          <div className="service">
            <h1 style={{ marginBottom: "1rem" }}>04</h1>
            <h1 style={{ marginBottom: "1rem" }}>Graphic design</h1>
            <p style={{ marginBottom: "1rem" }}>
              Web developemnt is the process of building, programming...
            </p>
            <h1 style={{ marginTop: "2rem" }}>
              READ MORE &nbsp; <HiOutlineArrowCircleRight />
            </h1>
          </div>
          <div className="service">
            <h1 style={{ marginBottom: "1rem" }}>05</h1>
            <h1 style={{ marginBottom: "1rem" }}>Digital Marketing</h1>
            <p style={{ marginBottom: "1rem" }}>
              Web developemnt is the process of building, programming...
            </p>
            <h1 style={{ marginTop: "2rem" }}>
              READ MORE &nbsp; <HiOutlineArrowCircleRight />
            </h1>
          </div>
          <div className="service">
            <h1 style={{ marginBottom: "1rem" }}>06</h1>
            <h1 style={{ marginBottom: "1rem" }}>Dropshipping</h1>
            <p style={{ marginBottom: "1rem" }}>
              Web developemnt is the process of building, programming...
            </p>
            <h1 style={{ marginTop: "2rem" }}>
              READ MORE &nbsp; <HiOutlineArrowCircleRight />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
