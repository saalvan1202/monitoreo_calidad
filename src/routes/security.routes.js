import { lazy } from "react";

const routesImport = {
  login: lazy(() => import("../modules/security/pages/login/Login")),
  recuperarContraseña: lazy(() =>
    import("../modules/security/pages/recuperar-contraseña/RecuperarContraseña")
  ),
  actualizarContraseña: lazy(() =>
    import(
      "../modules/security/pages/actualizar-contraseña/ActualizarContraseña"
    )
  ),
};

export const publicRoutes = [
  {
    path: "/login",
    element: routesImport.login,
    title: "Login",
  },
  {
    path: "/recuperar-contraseña",
    element: routesImport.recuperarContraseña,
    title: "Recuperar Contraseña",
  },
  {
    path: "/actualizar-contraseña",
    element: routesImport.actualizarContraseña,
    title: "Actualizar Contraseña",
  },
];

export const privateRoutes = [];
