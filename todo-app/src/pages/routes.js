import { lazy } from "react";

const routes = [
  {
    path: "/auth",
    label: "AuthPage",
    exact: false,
    component: lazy(() =>
      import("./AuthPage" /* webpackChunkName: "MainPage" */)
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/",
    label: "HomePage",
    exact: true,
    component: lazy(() =>
      import("./HomePage" /* webpackChunkName: "HomePage" */)
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/categories/:id",
    label: "HomePage",
    exact: false,
    component: lazy(() =>
      import("./HomePage" /* webpackChunkName: "HomePage" */)
    ),
    private: true,
    restricted: false,
  },
];

export default routes;
