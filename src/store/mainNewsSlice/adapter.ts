import { groupByArrays } from '../../utils';
import { FetchAPIDataType } from './types';

export const adapter = (
  topStories: FetchAPIDataType['results'],
  sundayNews: FetchAPIDataType['results'],
  moreNews: FetchAPIDataType['results'],
  cultureNews: FetchAPIDataType['results'],
) => {
  return {
    mainNewsBlock: {
      leftColumn: groupByArrays(
        topStories.filter((n, i) => i < 15 && n.section !== 'opinion'),
      ),
      rightColumn: {
        opinions: topStories.filter((n) => n.section === 'opinion'),
        sundayreview: sundayNews.filter((n, i) => i < 8),
      },
    },
    moreNewsBlock: {
      leftColumn: topStories.slice(-5, -2),
      centerColumn: topStories.filter(
        (n, i, arr) => i < arr.length - 1 && i === arr.length - 2,
      )[0],
      rightColumn: moreNews.filter((n, i) => i < 5),
    },
    cultureNewsBlock: {
      leftColumn: topStories.pop()!,
      rightColumn: cultureNews.slice(0, 4),
    },
  };
};
