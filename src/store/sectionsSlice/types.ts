import { NewsType } from '../mainNewsSlice';

export type SectionsParamsType = {
  section: string;
};

export type FetchDataSectionsType = {
  results: NewsType[];
};
