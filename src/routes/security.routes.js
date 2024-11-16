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
  crearUsuario: lazy(() =>
    import("../modules/security/pages/crear-usurio/CrearUsuario")
  ),
  profile: lazy(() => import("../modules/security/pages/profile/Profile")),
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

export const privateRoutes = [
  {
    path: "/create-user",
    element: routesImport.crearUsuario,
    title: "Crear Usuario",
  },
  {
    path: "/profile",
    element: routesImport.profile,
    title: "Perfil",
  },
];
