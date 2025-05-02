import React from "react";
import "./signup.scss";
import { Link } from "react-router-dom";
function login() {
  return (
    <div className="main-font main ">
      <div className="signup-container">
        <div className="left">
          <h2 className="heading-font">Loca Social.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            tenetur quia iusto aliquam, voluptas distinctio iure a! Voluptates
            animi asperiores qui quas dignissimos quibusdam tempore! Delectus
            ipsam veritatis aut quasi?
          </p>

          <span>Already have an account ? </span>

          <Link to="/chatApp/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="password" name="Password" />
            <input type="text" placeholder="Name" name="name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
