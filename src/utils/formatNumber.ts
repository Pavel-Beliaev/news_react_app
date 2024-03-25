export const formatNumber = (num: number): string => {
  return num
    .toString()
    .split('')
    .reverse()
    .map((el, i) => (i % 3 === 0 && i > 0 ? [' ', el] : el))
    .flat()
    .reverse()
    .join('');
};
