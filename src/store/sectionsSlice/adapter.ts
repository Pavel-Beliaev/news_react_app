import { FetchAPIDataType } from '../types';

export const adapter = (data: FetchAPIDataType['results']) => {
  return {
    topNews: {
      leftColumn: data.filter(
        (n) => n.section !== 'admin' && n.url !== 'null',
      )[0],
      centerColumn: data.filter(
        (n) => n.section !== 'admin' && n.url !== 'null',
      )[1],
      rightColumn: data
        .filter((n) => n.section !== 'admin' && n.url !== 'null')
        .slice(2, 4),
    },
    dataSections: data
      .filter((n) => n.section !== 'admin' && n.url !== 'null')
      .slice(4),
  };
};
