import React from "react";
import Content from "../theme/Content";
import Header from "../theme/Header";

const Register = () => {
  return (
    <section>
      <Header h1="Register" page="Register" />
      <Content>
        <h1 className="text-center">Register</h1>
        <div>
          <form></form>
          <div>
            <h1>Already have an account? Login</h1>
            <div>
              <h1>social login section</h1>
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Register;
