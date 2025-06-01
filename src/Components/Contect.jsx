import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const Contect = () => {
  return (
    <section className="contact" id="contact">
      <div className="continfo">
        <div className="credendiv">
          <h1>Let's Talk</h1>
          <p>we can connet throught the email and phone number</p>
          <h3>
            <IoIosMail />
            &nbsp; mohmmadmazid5500@gamil.com
          </h3>
          <h3>
            <FaPhoneFlip /> &nbsp; 1234567890
          </h3>
          <h3>
            <MdLocationOn /> &nbsp;Noida India
          </h3>
        </div>
        <div className="formdiv">
          <form>
            <label>Your Name</label>
            <br></br>
            <input type="text" placeholder="Enter Your Name"></input>
            <br></br>
            <br></br>
            <label>Your Email</label>
            <input type="email" placeholder="Enter Your Email"></input>
            <br></br>
            <br></br>
            <label>Write Your Message</label>
            <textarea></textarea>

            <br></br>
            <br></br>
            <button>Submit Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contect;
