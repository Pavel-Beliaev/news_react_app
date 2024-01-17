import { month } from '../mock';

export const changeFormatDate = (date: string): string => {
  const formatingDate = date
    .split(/-|[A-Z]/gi)
    .slice(0, 3)
    .map((n, i) => (i === 1 ? month[n] : n));
  const year = formatingDate.shift();
  return [formatingDate.join(' '), year].join(', ');
};
