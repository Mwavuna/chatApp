import Leftbar from "./components/leftbar/leftbar.jsx";
import Rightbar from "./components/rightbar/rightbar.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/register/signup.jsx";
import Profile from "./pages/profile/profile.jsx";
import Home from "./pages/home/home.jsx";
import "./App.scss";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { darkTheme } from "./contexts/themeContext.jsx";
import { useContext } from "react";
function App() {
  //variable to check if user is logged in
  const islogggedin = true;
  const { dark } = useContext(darkTheme);
  const DashboardLayout = () => {
    return (
      <>
        <Navbar />

        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </>
    );
  };

  const ProtectedRoute = ({ children }) => {
    return islogggedin ? children : <Navigate to="/chatApp/login" />;
  };

  const router = createBrowserRouter([
    {
      path: "/chatapp/login",
      element: <Login />,
    },
    {
      path: "/chatApp/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/chatApp", element: <Home /> },
        { path: "chatApp/profile/:id", element: <Profile /> },
      ],
    },
    {
      basename: "/chatApp",
    },
  ]);
  return (
    <div
      className={`${dark ? "dark" : "light"}-theme`}
      style={{ padding: "0px", margin: "0px" }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
