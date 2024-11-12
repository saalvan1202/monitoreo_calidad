import { lazy } from 'react';

const routesImport = {
  zones: lazy(() => import('../modules/monitoring/pages/zones')),
  areas: lazy(() => import('../modules/monitoring/pages/areas')),
};

export const publicRoutes = [];

export const privateRoutes = [
  {
    path: '/zones',
    element: routesImport.zones,
    title: 'Zonas',
  },
  {
    path: '/areas/:id',
    element: routesImport.areas,
    title: 'Areas',
  },
];
