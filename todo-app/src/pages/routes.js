import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "HomePage",
    exact: true,
    component: lazy(() =>
      import("./HomePage/HomePage" /* webpackChunkName: "HomePage" */)
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/auth",
    label: "AuthPage",
    exact: false,
    component: lazy(() =>
      import("./AuthPage/AuthPage" /* webpackChunkName: "MainPage" */)
    ),
    private: false,
    restricted: true,
  },
];

export default routes;
