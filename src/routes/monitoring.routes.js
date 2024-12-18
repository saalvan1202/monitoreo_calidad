import { lazy } from "react";

const routesImport = {
  zones: lazy(() => import("../modules/monitoring/pages/zones")),
  areas: lazy(() => import("../modules/monitoring/pages/areas")),
  waterTanks: lazy(() => import("../modules/monitoring/pages/water-tanks")),
  reports: lazy(() => import("../modules/reports/Reports")),
  parameters: lazy(() => import("../modules/monitoring/pages/parameters")),
};

export const publicRoutes = [];

export const privateRoutes = [
  {
    path: "/zones",
    element: routesImport.zones,
    title: "Zonas",
  },
  {
    path: "/areas",
    element: routesImport.areas,
    title: "Areas",
  },
  {
    path: "/water-tanks",
    element: routesImport.waterTanks,
    title: "Tanques",
  },
  {
    path: "/reports",
    element: routesImport.reports,
    title: "Reportes",
  },
  {
    path: "/parameters",
    element: routesImport.parameters,
    title: "Parametros",
  },
];
