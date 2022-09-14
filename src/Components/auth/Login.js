import React, { useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import Content from "../theme/Content";
import Header from "../theme/Header";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  // const [error, setError] = useState("");

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, EPUser, EPLoading, EPError] =
    useSignInWithEmailAndPassword(auth);

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

  const signInGoogle = () => {
    signInWithGoogle();
  };

  if (gUser || EPUser) {
    setEmail("");
    setPassword("");
    setAgree(false);
    navigate("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <Header h1="Login" page="Login" />
      <Content className="flex flex-col justify-center items-center gap-3 ">
        <h1 className="text-center text-3xl font-serif font-semibold w-96 hover:text-primary">
          Login
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
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-center gap-1">
                <input
                  value={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  type="checkbox"
                  className="checkbox"
                />
                Remember me
              </div>
              <Link
                to="/login"
                className="hover:text-warning text-error font-semibold hover:duration-500 "
              >
                Lost your password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={!agree || EPLoading || gLoading}
              className="btn btn-primary hover:btn-secondary border-none  text-white hover:text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 disabled:bg-orange-200 w-full"
            >
              Login
            </button>
            {signUpError}
          </form>
          <div>
            <h5 className="text-center mb-5">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary font-semibold ">
                Registration
              </Link>
            </h5>

            <div className="divider text-primary">OR</div>

            {/* Social Login section */}
            <div className="flex flex-col justify-center items-center gap-3 px-3">
              <button
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
    </div>
  );
};

export default Login;
