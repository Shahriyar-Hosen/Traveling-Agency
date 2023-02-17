import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import ErrorMessage from "@/common/ErrorMessage";
import Content from "Components/theme/Content";
import Header from "Components/theme/Header";
import auth from "firebase.inite";
import useLogin from "hooks/useLogin";
import useRedirect from "hooks/useRedirect";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");

  const login = useLogin();
  const redirect = useRedirect();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (!loading && !error && user?.user?.accessToken) {
      const userDetails = user?.user;
      const token = user?.user?.accessToken;

      login(userDetails, token);
      redirect(userDetails, token);
    }
  }, [user, loading, error, login, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    if (password === reEnterPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setErrorMassage("Passwords do not match");
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
            <div className="w-full">
              <input
                type="password"
                placeholder="Re-enter Password"
                onChange={(e) => setReEnterPassword(e.target.value)}
                className="input input-bordered w-full"
              />
              <ErrorMessage title={errorMassage} className="ml-2" />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer p-0">
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
            <div className="flex justify-center items-center flex-col">
              <button
                type="submit"
                disabled={!agree}
                className="btn btn-primary hover:btn-secondary border-none  text-white hover:text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 disabled:bg-orange-200"
              >
                Registration
              </button>
              <ErrorMessage title={error?.message} className="ml-4 mt-2" />
            </div>
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
            <SocialLogin />
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Register;
