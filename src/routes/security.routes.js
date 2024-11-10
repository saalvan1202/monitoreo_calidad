import { lazy } from "react";

const routesImport = {
  login: lazy(() => import("../modules/security/Login")),
};

export const publicRoutes = [
  {
    path: "/login",
    element: routesImport.login,
    title: "Login",
  },
];

export const privateRoutes = [];
