import { groupByArrays } from '../../utils';
import { FetchAPIDataType } from './types';

export const adapter = (data: FetchAPIDataType['results']) => {
  return {
    mainNewsBlock: {
      leftColumn: groupByArrays(
        data.filter((n, i) => i < 15 && n.section !== 'opinion'),
      ),
      rightColumn: {
        opinions: data.filter((n) => n.section === 'opinion'),
        sundayreview: data.filter((n, i) => i < 8),
      },
    },
    moreNewsBlock: {
      leftColumn: data.slice(-5, -2),
      centerColumn: data.filter(
        (n, i, arr) => i < arr.length - 1 && i === arr.length - 2,
      )[0],
      rightColumn: data.filter((n, i) => i < 5),
    },
    cultureNewsBlock: {
      leftColumn: data.pop()!,
      rightColumn: data.slice(0, 4),
    },
  };
};
