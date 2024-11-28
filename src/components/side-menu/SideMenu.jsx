import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfigProvider, Menu } from 'antd';
import { getLevelKeys, onOpenKeys } from './utils.js';
import { menuItems } from '../../@fake-db/menuItems.jsx'

import PropTypes from 'prop-types';

const SideMenu = () => {

  const navigate = useNavigate()

  const MENU_ITEMS = menuItems;

  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const levelKeys = getLevelKeys(MENU_ITEMS);

  const onOpenChange = (openKeys) => {
    const newStateOpenKeys = onOpenKeys(openKeys, levelKeys, stateOpenKeys);
    setStateOpenKeys(newStateOpenKeys);
  };

  const handleClick = (item) => {
    if (item.key == '11') {
      navigate('/list-users');
    }

    if (item.key == '12') {
      navigate('/create-user');
    }

    if (item.key == '13') {
      navigate('/backup');
    }

    if (item.key == '21') {
      navigate('/zones');
    }

    if (item.key == '22') {
      navigate('/areas');
    }

    if (item.key == '23') {
      navigate('/water-tanks');
    }

    if (item.key == '24') {
      navigate('/parameters');
    }

    if (item.key == '31') {
      navigate('/reports');
    }
  };

  return (
    <div className='bg-fondo-footer'>
      <ConfigProvider theme={{
        components: {
          Menu: {
            colorBgContainer: '#3C3F41',
            colorText: '#B6AFAF',
            colorItemTextSelected: 'white',
            colorItemTextHover: 'white',
            controlItemBgActive: '#525252'
          },
        },
      }}>
        <Menu
          defaultSelectedKeys={['231']}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          mode="inline"
          items={MENU_ITEMS}
          onClick={handleClick}
        />
      </ConfigProvider>
    </div>
  );
};
export default SideMenu;

SideMenu.propTypes = {
  collapsed: PropTypes.bool,
};
