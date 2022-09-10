import React from "react";
import logo from "../../Assets/log/logo-w.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Content from "../theme/Content";

const Footer = () => {
  return (
    <footer className="bg-[#17233e] pb-7">
      <figure>
        <img
          src="https://i.ibb.co/mGnbXdH/shape8.png"
          alt=""
        />
      </figure>
      <Content className="flex flex-col gap-20 text-white pt-20 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-5">
            <div>
              <figure>
                <img src={logo} alt="" />
              </figure>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                suspendisse leo neque iaculis molestie sagittis maecenas aenean
                eget molestie sagittis.
              </p>
            </div>
            <p>
              PO Box: +47-252-254-2542 Location: Collins Street, sydney,
              Australia Email: info@Travelin.com Website: www.Travelin.com
            </p>
          </div>
          {/* Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 font-semibold gap-6 justify-center items-center text-center md:text-start">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold font-serif mb-2">Quick Link</h1>
              <p>About Us</p>
              <p>Delivery Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Customer Service</p>
              <p>Return Policy</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold font-serif mb-2">Categories</h1>
              <p>Travel</p>
              <p>Technology</p>
              <p>Lifestyle</p>
              <p>Destinations</p>
              <p>Entertainment</p>
              <p>Business</p>
            </div>
          </div>
          {/* search */}
          <div className="flex flex-col gap-2 justify-center items-center text-center md:text-start">
            <h1 className="text-3xl font-bold font-serif mb-2">Newsletter</h1>
            <p className="font-semibold">
              Jin our community of over 200,000 global readers who receives
              emails filled with news, promotions, and other good stuff.
            </p>
            <form className="flex flex-row gap-2 md:mr-5 mt-5">
              <input
                type="email"
                placeholder="Enter your Email"
                className="input w-full text-black"
              />
              <button className="btn btn-primary text-white">Subscribe</button>
            </form>
          </div>
        </div>
        {/* last footer */}
        <div className="flex justify-between items-center bg-black bg-opacity-10 py-5 px-5 rounded-xl mt-5">
          <h3>2022 Travelin. All rights reserved.</h3>
          <span className="flex justify-center items-center gap-2">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </span>
        </div>
      </Content>
    </footer>
  );
};

export default Footer;
