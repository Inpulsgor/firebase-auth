import { lazy } from "react";

export default [
  {
    path: "/",
    label: "HomePage",
    exact: true,
    component: lazy(() => import("./pages/HomePage")),
    private: false,
    restricted: false,
  },
  {
    path: "/cart",
    label: "CartPage",
    exact: false,
    component: lazy(() => import("./pages/CartPage")),
    private: false,
    restricted: false,
  },
  {
    path: "/404",
    label: "NotFound",
    exact: false,
    component: lazy(() => import("./pages/NotFoundPage")),
    private: false,
    restricted: false,
  },
];
