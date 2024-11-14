import { lazy } from 'react';

const routesImport = {
  zones: lazy(() => import('../modules/monitoring/pages/zones')),
  areas: lazy(() => import('../modules/monitoring/pages/areas')),
  waterTanks: lazy(() => import('../modules/monitoring/pages/water-tanks')),
};

export const publicRoutes = [];

export const privateRoutes = [
  {
    path: '/zones',
    element: routesImport.zones,
    title: 'Zonas',
  },
  {
    path: '/areas',
    element: routesImport.areas,
    title: 'Areas',
  },
  {
    path: '/water-tanks',
    element: routesImport.waterTanks,
    title: 'Tanques',
  },
];
