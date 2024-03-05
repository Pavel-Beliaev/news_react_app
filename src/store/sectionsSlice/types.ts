import { ErrorType, NewsType } from '../types';

export type SectionsParamsType = {
  section: string;
};

export type SectionsPageDataType = {
  topNews: {
    leftColumn: NewsType | [];
    centerColumn: NewsType | [];
    rightColumn: NewsType[];
  };
  dataSections: NewsType[];
};

export type SectionsSliceType = SectionsPageDataType & ErrorType;
