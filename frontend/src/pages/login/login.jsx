import React from "react";
import "./login.scss";
function login() {
  return (
    <div className="main-font main ">
      <div className="container">
        <div className="left">
          <h2 className="heading-font">Hello World</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            tenetur quia iusto aliquam, voluptas distinctio iure a! Voluptates
            animi asperiores qui quas dignissimos quibusdam tempore! Delectus
            ipsam veritatis aut quasi?
          </p>
          <span>Don't have an account ? </span>
          <a>Register</a>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <a>Login</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
