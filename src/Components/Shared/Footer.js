import React from "react";
import logo from "../../Assets/log/logo-w.png";

const Footer = () => {
  return (
    <footer className="bg-[#17233e]">
      <figure>
        <img
          // className="bg-[#17233e]"
          src="https://i.ibb.co/mGnbXdH/shape8.png"
          alt=""
        />
      </figure>
      <div className="min-h-[600px] text-white pt-20 px-10">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 text-lg font-semibold">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold font-serif">Quick Link</h1>
              <p>About Us</p>
              <p>Delivery Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Customer Service</p>
              <p>Return Policy</p>
            </div>
            <div>
              <h1>Categories</h1>
              <p>Travel</p>
              <p>Technology</p>
              <p>Lifestyle</p>
              <p>Destinations</p>
              <p>Entertainment</p>
              <p>Business</p>
            </div>
          </div>
          {/* search */}
          <div>
            <h1>Newsletter</h1>
            <p>
              Jin our community of over 200,000 global readers who receives
              emails filled with news, promotions, and other good stuff.
            </p>
            <form>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
              />
              <button className="btn btn-primary text-white">Subscribe</button>
            </form>
          </div>
        </div>
        {/* last footer */}
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
