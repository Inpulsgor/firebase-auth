import { lazy } from "react";

export const routes = [
  {
    path: "/",
    label: "MainPage",
    exact: true,
    component: lazy(() =>
      import("./MainPage/MainPage" /* webpackChunkName: "MainPage" */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/lists/:id",
    label: "ListsPage",
    exact: false,
    component: lazy(() =>
      import("./ListPage/ListPage" /* webpackChunkName: "ListsPage" */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/lists/:id",
    label: "ListsPage",
    exact: false,
    component: lazy(() =>
      import("./ListPage/ListPage" /* webpackChunkName: "ListsPage" */)
    ),
    private: false,
    restricted: false,
  },
];
