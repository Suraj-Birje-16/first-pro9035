import { Children, lazy } from "react";
import Navbar from "../components/Navbar";
import MinimalLayout from "../pages/MinimalLayout";
import Loadable from "../components/Loadable";

const Login = Loadable(lazy(() => import("./component/Login")));
const Register = Loadable(lazy(() => import("./Component/Register")));
const Dashboard = Loadable(lazy(() => import("./Component/Dashboard")));
const About = Loadable(lazy(() => import("./Component/About")));
const Contact = Loadable(lazy(() => import("./Component/Contact")));
const Home = Loadable(lazy(() => import("./Component/Home")));
export const Routes = {
  path: "/",
  element: <Navbar />,
  children: [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/Register", element: <Register /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/About", element: <About /> },
    { path: "/Login", element: <Login /> },
    { path: "/Home", element: <Home /> }
  ],
};
export const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
  ],
};
