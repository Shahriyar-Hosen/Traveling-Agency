import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Content from "../theme/Content";
import Header from "../theme/Header";
import PButton from "../theme/PButton";

const Register = () => {
  return (
    <section>
      <Header h1="Register" page="Register" />
      <Content className="flex flex-col justify-center items-center gap-3 ">
        <h1 className="text-center text-3xl font-serif font-semibold w-96 hover:text-primary">
          Register
        </h1>
        <div className="w-96 flex flex-col justify-center gap-5">
          <form className="flex flex-col justify-center  items-center gap-3 border-y py-5 border-dashed">
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              className="input input-bordered w-full"
            />
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text pr-5 pl-2">
                  I have read and accept the Terms and Privacy Policy?
                </span>
              </label>
            </div>
            <PButton> Registration</PButton>
          </form>
          <div>
            <h1 className="text-center mb-5">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold ">
                Login
              </Link>
            </h1>

            <div className="divider text-primary">OR</div>

            {/* Social Login section */}
            <div className="flex flex-col justify-center items-center gap-3 px-3">
              <button className="px-2 py-3 rounded-lg w-full text-white hover:bg-[#ff3015] border-none bg-[#dd4b39] hover:duration-500 hover:ease-in-out ease-in-out duration-500 flex justify-center items-center gap-3">
                <FaGoogle /> Login with Google
              </button>
              <button className="px-2 py-3 rounded-lg w-full text-white hover:bg-[#3675ff] border-none bg-[#506dab] flex justify-center items-center gap-3 hover:duration-500 hover:ease-in-out ease-in-out duration-500">
                <FaFacebook /> Login with Facebook
              </button>
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Register;