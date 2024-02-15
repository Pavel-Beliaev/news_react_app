import { NewsType } from '../types';

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
    centerColumn: NewsType;
    rightColumn: NewsType[];
  };
  cultureNewsBlock: {
    leftColumn: NewsType;
    rightColumn: NewsType[];
  };
};

type MediaType = {
  caption: string;
  copyright: string;
  format: string;
  height: number;
  subtype: string;
  type: string;
  url: string;
  width: number;
};

type ResultsType = {
  abstract: string;
  byline: string;
  created_date: string;
  des_facet: string[];
  geo_facet: string[];
  item_type: string;
  kicker: string;
  material_type_facet: string;
  multimedia: MediaType[];
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  updated_date: string;
  url: string;
  uri: string;
};
export type FetchAPIDataType = {
  copyright: string;
  last_updated: string;
  num_results: number;
  results: ResultsType[];
  section: string;
  status: string;
};
