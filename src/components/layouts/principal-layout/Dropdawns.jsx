import { Avatar, Badge, Dropdown } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Perfil
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Cerrar sesión
            </a>
        ),
        danger: true,
    },
];

const items2 = [
    {
        key: '1',
        label: 'Sin notificaciones',
        disabled: true
    },
];

const Dropdowns = () => (
    <>
        <Dropdown
            menu={{
                items: items2,
            }}
            placement="bottomRight"
            className='cursor-pointer'
        >
            <Badge size='small' count={1} color='geekblue'>
                <Avatar style={{ backgroundColor: '#868889' }} size={'default'} icon={<FontAwesomeIcon icon={faBell} className='text-fondo-footer' />} />
            </Badge>
        </Dropdown>
        <Dropdown
            menu={{
                items,
            }}
            placement="bottomRight"
            className='cursor-pointer'
        >
            <Avatar style={{ backgroundColor: '#868889' }} size={'default'} icon={<FontAwesomeIcon icon={faUser} className='text-fondo-footer' />} />
        </Dropdown>
    </>
);
export default Dropdowns;