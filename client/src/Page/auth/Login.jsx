import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import ErrorMessage from "@/common/ErrorMessage";
import Content from "Components/theme/Content";
import Header from "Components/theme/Header";
import auth from "firebase.inite";
import useLogin from "hooks/useLogin";
import useRedirect from "hooks/useRedirect";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const login = useLogin();
  const redirect = useRedirect();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (!loading && !error && user?.user?.accessToken) {
      const userDetails = user?.user;
      const token = user?.user?.accessToken;

      login(userDetails, token);
      redirect(userDetails, token);
    }
  }, [user, loading, error, login, redirect]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
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
            <div className="flex justify-center items-center flex-col w-full">
              <button
                type="submit"
                disabled={!agree || loading}
                className="btn btn-primary hover:btn-secondary border-none  text-white hover:text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 disabled:bg-orange-200 w-full"
              >
                Login
              </button>
              <ErrorMessage title={error?.message} className="ml-4 mt-2" />
            </div>
          </form>
          {/* social login */}
          <div>
            <h5 className="text-center mb-5">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary font-semibold ">
                Registration
              </Link>
            </h5>

            <div className="divider text-primary">OR</div>

            {/* Social Login section */}
            <SocialLogin />
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Login;
