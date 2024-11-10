import { useState } from 'react';
import { ConfigProvider, Menu } from 'antd';
import { getLevelKeys, onOpenKeys } from './utils.js';
import { menuItems } from '../../@fake-db/menuItems.jsx'

import PropTypes from 'prop-types';

const SideMenu = () => {

  const MENU_ITEMS = menuItems;

  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const levelKeys = getLevelKeys(MENU_ITEMS);

  const onOpenChange = (openKeys) => {
    const newStateOpenKeys = onOpenKeys(openKeys, levelKeys, stateOpenKeys);
    setStateOpenKeys(newStateOpenKeys);
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
        />
      </ConfigProvider>
    </div>
  );
};
export default SideMenu;

SideMenu.propTypes = {
  collapsed: PropTypes.bool,
};
