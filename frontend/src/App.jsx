import Leftbar from "./components/leftbar/leftbar.jsx";
import Rightbar from "./components/rightbar/rightbar.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Login from "./pages/login/login.jsx";
import Signup from "./pages/register/signup.jsx";
import Profile from "./pages/profile/profile.jsx";
import Home from "./pages/home/home.jsx";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

function App() {
  //variable to check if user is logged in
  const islogggedin = true;

  const DashboardLayout = () => {
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
  return <RouterProvider router={router} />;
}

export default App;
