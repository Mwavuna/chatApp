import React from "react";
import "./signup.scss";
function signup() {
  return (
    <div className="main-font main ">
      <div className="container">
        <div className="left">
          <h2>SignUp</h2>
          <form>
            <input type="text" placeholder="Username" name="username" />
            <input type="Email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="text" placeholder="Name" name="Name" />

            <a>SignUp</a>
          </form>
        </div>

        <div className="right">
          <h2 className="heading-font">Loca Poda.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            tenetur quia iusto aliquam, voluptas distinctio iure a! Voluptates
            animi asperiores qui quas dignissimos quibusdam tempore! Delectus
            ipsam veritatis aut quasi?
          </p>
          <span>Already have an account ? </span>
          <a>Login</a>
        </div>
      </div>
    </div>
  );
}

export default signup;
