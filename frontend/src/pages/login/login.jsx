import React from "react";
import "./login.scss";
function login() {
  return (
    <div className="main-font main ">
      <div className="container">
        <div className="left">
          <h2>Hello World</h2>
          <p></p>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            tenetur quia iusto aliquam, voluptas distinctio iure a! Voluptates
            animi asperiores qui quas dignissimos quibusdam tempore! Delectus
            ipsam veritatis aut quasi?
          </span>
          <button>Register</button>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form>
            <input type="text" />
            <input type="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
