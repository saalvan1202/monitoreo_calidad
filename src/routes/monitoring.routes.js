import { lazy } from 'react';

const routesImport = {
  zones: lazy(() => import('../modules/monitoring/pages/zones')),
};

export const publicRoutes = [];

export const privateRoutes = [
  {
    path: '/zones',
    element: routesImport.zones,
    title: 'Zonas',
  },
];
