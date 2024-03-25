export const usePaginate = (
  totalPage: number,
  currentPage: number,
  range: number,
): number[] => {
  const newArray = Array.from(Array(totalPage).keys(), (n) => n + 1);
  const paginate = newArray.filter(
    (num) => num <= currentPage + range && num >= currentPage - range,
  );

  if (paginate.includes(1)) {
    paginate.push(0, totalPage);
    return paginate;
  } else if (paginate.includes(totalPage)) {
    paginate.unshift(1, 0);
    return paginate;
  } else {
    paginate.unshift(1, 0);
    paginate.push(0, totalPage);
    return paginate;
  }
};
