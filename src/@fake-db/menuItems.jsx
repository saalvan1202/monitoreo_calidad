import {
  ExperimentOutlined,
  PaperClipOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const menuItems = [
  {
    label: 'Seguridad',
    key: '1',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Usuarios',
        key: '11'
      },
      {
        label: 'Crear usuario',
        key: '12'
      },
      {
        label: 'Backup',
        key: '13'
      },
    ],
  },
  {
    label: 'Monitoreo',
    key: '2',
    icon: <ExperimentOutlined />,
    children: [
      {
        label: 'Zonas',
        key: '21'
      },
      {
        label: 'Areas',
        key: '22'
      },
      {
        label: 'Tanques',
        key: '23'
      },
      {
        label: 'Parametros',
        key: '24'
      },
    ],
  },

  {
    label: 'Reportes',
    key: '3',
    icon: <PaperClipOutlined />,
    children: [
      {
        label: 'Reporte',
        key: '31'
      },
    ],
  },

];
