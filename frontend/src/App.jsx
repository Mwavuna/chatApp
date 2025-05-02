import { useState } from "react";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/register/signup.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      <SignUp />
    </>
  );
}

export default App;
