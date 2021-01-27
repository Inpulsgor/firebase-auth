import { lazy } from "react";

export default [
  {
    path: "/",
    label: "HomePage",
    exact: true,
    component: lazy(() => import("./pages/Home/HomePage")),
    private: false,
    restricted: false,
  },
  {
    path: "/cart",
    label: "CartPage",
    exact: false,
    component: lazy(() => import("./pages/Cart/CartPage")),
    private: false,
    restricted: false,
  },
  {
    path: "/404",
    label: "NotFound",
    exact: false,
    component: lazy(() => import("./pages/NotFound/NotFoundPage")),
    private: false,
    restricted: false,
  },
];
