// import { icons } from '@/constants/iconsDictionary.jsx';

export const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

export const onOpenKeys = (openKeys, levelKeys, stateOpenKeys) => {
  const currentOpenKey = openKeys.find(
    (key) => stateOpenKeys.indexOf(key) === -1
  );
  // open
  if (currentOpenKey !== undefined) {
    const repeatIndex = openKeys
      .filter((key) => key !== currentOpenKey)
      .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
    return (
      openKeys
        // remove repeat key
        .filter((_, index) => index !== repeatIndex)
        // remove current level all child
        .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
    );
  } else {
    // close
    return openKeys;
  }
};

// export const menuItemsRender = (menuItems) => {
//   const MENU_ITEMS = menuItems.map((module) => ({
//     key: module.menu_key,
//     icon: icons[module.icon],
//     label: module.title,
//     children: module.screens.map((screen) => ({
//       key: module.menu_key + screen.menu_key,
//       label: screen.title,
//     })),
//   }));

//   return MENU_ITEMS;
// };
