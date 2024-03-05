import { ErrorType, NewsType } from '../types';

export type HomePageDataType = {
  mainNewsBlock: {
    leftColumn: NewsType[][];
    rightColumn: {
      opinions: NewsType[];
      sundayreview: NewsType[];
    };
  };
  moreNewsBlock: {
    leftColumn: NewsType[];
    centerColumn: NewsType | [];
    rightColumn: NewsType[];
  };
  cultureNewsBlock: {
    leftColumn: NewsType | [];
    rightColumn: NewsType[];
  };
};

export type DataSliceType = HomePageDataType & ErrorType;
