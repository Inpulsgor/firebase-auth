import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "MainPage",
    exact: true,
    component: lazy(() =>
      import("./MainPage/MainPage" /* webpackChunkName: "MainPage" */)
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
  {
    path: "/lists/:id",
    label: "ListsPage",
    exact: false,
    component: lazy(() =>
      import("./ListPage/ListPage" /* webpackChunkName: "ListsPage" */)
    ),
    private: true,
    restricted: false,
  },
];

export default routes;
