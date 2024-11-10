import { useState } from 'react';
import { Menu } from 'antd';
import ButtonAcc from '../cite-ui/ButtonAcc.jsx';
import { getLevelKeys, onOpenKeys } from './utils.js';
import { menuItems } from '../../@fake-db/menuItems.jsx'

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const SideMenu = ({ collapsed }) => {

  const MENU_ITEMS = menuItems;

  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const levelKeys = getLevelKeys(MENU_ITEMS);

  const onOpenChange = (openKeys) => {
    const newStateOpenKeys = onOpenKeys(openKeys, levelKeys, stateOpenKeys);
    setStateOpenKeys(newStateOpenKeys);
  };

  return (
    <div>
      <Menu
        defaultSelectedKeys={['231']}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        mode="inline"
        items={MENU_ITEMS}
      />
      <div>
        <ButtonAcc
          className={`w-full h-10 ${!collapsed && 'flex justify-start px-7'}`}
          type="primary"
          danger={true}
        >
          <FontAwesomeIcon
            className="transform scale-x-[-1]"
            icon={faArrowRightFromBracket}
          />
          {!collapsed && 'Cerrar Sesión'}
        </ButtonAcc>
      </div>
    </div>
  );
};
export default SideMenu;

SideMenu.propTypes = {
  collapsed: PropTypes.bool,
};
