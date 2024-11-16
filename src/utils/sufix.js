export const removeSuffix = (obj, suffix) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (key.endsWith(suffix)) {
      const newKey = key.slice(0, -suffix.length);
      newObj[newKey] = obj[key];
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};
