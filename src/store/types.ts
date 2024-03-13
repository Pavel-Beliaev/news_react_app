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

export type ErrorType = {
  status: 'loading' | 'success' | 'error';
  message: null | string;
  code: string;
};

export type NewsType = Pick<
  FetchAPIDataType['results'][number],
  | 'abstract'
  | 'byline'
  | 'title'
  | 'url'
  | 'uri'
  | 'section'
  | 'subsection'
  | 'created_date'
> & {
  multimedia: Pick<
    FetchAPIDataType['results'][number]['multimedia'][number],
    'caption' | 'url' | 'copyright'
  >[];
};
