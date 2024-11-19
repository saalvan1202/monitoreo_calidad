export const optionsTransform = (data, idKey = 'id') => {
  if (!data) return [];

  const options = data.map((_data) => {
    return {
      value: _data[idKey],
      label: _data.name,
    };
  });

  const newOptions = [
    { value: 0, label: 'Seleccione una opción', disabled: true },
    ...options,
  ];

  return newOptions;
};
