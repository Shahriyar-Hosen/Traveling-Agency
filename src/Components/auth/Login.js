import React from "react";
import Content from "../theme/Content";
import Header from "../theme/Header";

const Login = () => {
  return (
    <div>
      <Header h1="Login" page="Login" />
      <Content>
        <h1 className="text-center">Login</h1>
        <div>
          <form></form>
          <div>
            <h1>Don't have an account? Register</h1>
            <div>
              <h1>social login section</h1>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Login;
