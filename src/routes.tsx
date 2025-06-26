import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";
import Home from "./routes/Home/Home";
import App from "./components/App/App";

const routesObj: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home }],
  },
];
const routes = createBrowserRouter(routesObj);
export default routes;
