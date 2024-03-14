export const getDataFromLocalStorage = (
  key: string,
  defaultValue: [] | {} | '',
) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};
