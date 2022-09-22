import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import Header from "../Shared/Header";
import Content from "../theme/Content";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, EPUser, EPLoading, EPError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  // const [token] = useToken(user || gUser);

  const navigate = useNavigate();
  let location = useLocation();

  let signUpError;
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    // navigate(from, { replace: true });
  }, [navigate, from]);

  // if (EPLoading || gLoading) {
  //   return <div>Loading...</div>;
  // }

  if (EPError || gError) {
    signUpError = (
      <p className="text-red-500">{EPError?.message || gError?.message}</p>
    );
  }

  if (gUser || EPUser) {
    setEmail("");
    setPassword("");
    setAgree(false);
    navigate("/");
  }

  const signInGoogle = () => {
    signInWithGoogle();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === reEnterPassword) {
      console.log(userName, email, password);

      createUserWithEmailAndPassword(email, password);
    } else {
      setError("Password don't match");
    }
  };

  return (
    <section>
      <Header h1="Register" page="Register" />
      <Content className="flex flex-col justify-center items-center gap-3 ">
        <h1 className="text-center text-3xl font-serif font-semibold w-96 hover:text-primary">
          Register
        </h1>
        <div className="w-96 flex flex-col justify-center gap-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center  items-center gap-3 border-y py-5 border-dashed"
          >
            <input
              type="text"
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              onChange={(e) => setReEnterPassword(e.target.value)}
              className="input input-bordered w-full"
            />
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  value={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="checkbox"
                />
                <span className="label-text pr-5 pl-2">
                  I have read and accept the Terms and Privacy Policy?
                </span>
              </label>
            </div>
            <button
              type="submit"
              disabled={!agree || EPLoading}
              className="btn btn-primary hover:btn-secondary border-none  text-white hover:text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 disabled:bg-orange-200"
            >
              {" "}
              Registration
            </button>
            {signUpError}
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
              <button
                disabled={gLoading}
                className="px-2 py-3 rounded-lg w-full text-white hover:bg-[#ff3015] border-none bg-[#dd4b39] hover:duration-500 hover:ease-in-out ease-in-out duration-500 flex justify-center items-center gap-3"
                onClick={signInGoogle}
              >
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
