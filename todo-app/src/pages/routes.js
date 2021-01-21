import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "MainPage",
    exact: true,
    component: lazy(() =>
      import("./MainPage/MainPage" /* webpackChunkName: "MainPage" */)
    ),
  },
  {
    path: "/lists/:id",
    label: "ListsPage",
    exact: false,
    component: lazy(() =>
      import("./ListPage/ListPage" /* webpackChunkName: "ListsPage" */)
    ),
  },
];

export default routes;
