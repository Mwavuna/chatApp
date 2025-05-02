import Leftbar from "./components/leftbar/leftbar.jsx";
import Rightbar from "./components/rightbar/rightbar.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/register/signup.jsx";
import Profile from "./pages/profile/profile.jsx";
import Home from "./pages/home/home.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "profile/:id", element: <Profile /> },
      ],
    },
    {
      basename: "/chatApp",
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
