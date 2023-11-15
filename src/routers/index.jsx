import AboutPage from "../pages/about/page";
import HomePage from "../pages/home/page";
import AuthPage from "@/pages/auth";

export default [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
];
