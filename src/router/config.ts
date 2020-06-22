import { lazy } from "react";
let route = [
  {
    path: "/",
    title: "home",
    file: "home",
    component: lazy(() => import(`../pages/home`)),
  },
];
export default route;
