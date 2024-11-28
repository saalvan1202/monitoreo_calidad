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

export const convertValuesToInt = (data) => {
  const convertedData = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, parseInt(value, 10)])
  );

  return convertedData;
};

export const convertToArray = (data) => {
  const formattedData = Object.entries(data).map(([key, value]) => ({
    parametro: key,
    indicador: value, // Multiplica los valores si deseas escalarlos
  }));

  return formattedData;
};

export const verifyErrors = (data) => {
  const resultado = data
    .filter((item) => item.indicador > 500)
    .map((item) => ({
      parametro: item.parametro,
      mensaje: `El indicador de ${
        item.parametro
      } supera el límite optimo por un valor de ${item.indicador - 500}`,
    }));

  return resultado;
};
