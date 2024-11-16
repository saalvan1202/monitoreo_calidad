export const optionsTransform = (data) => {
  const options = data.map((_data) => {
    return {
      value: _data.id,
      label: _data.nombre,
    };
  });

  const newOptions = [
    { value: 0, label: 'Seleccione una opción', disabled: true },
    ...options,
  ];

  return newOptions;
};
