import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import Home from "./routes/Home/Home";
import App from "./components/App/App";
import Login from "./routes/Login/Login";
import Signup from "./routes/Signup/Signup";

const routesObj: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home }],
  },
  { path: "/login", Component: Login },
  { path: "/signup", Component: Signup },
];
const routes = createBrowserRouter(routesObj);
export default routes;
