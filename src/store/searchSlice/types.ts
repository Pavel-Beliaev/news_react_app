import { ErrorType } from '../types';

export type SearchDataSliceType = SearchPageDataType & {
  page: number;
  sort: ParamsType['sort'];
} & ErrorType;

export type ParamsType = {
  query: string;
  page: number;
  sort: 'newest' | 'oldest' | 'relevance';
};

export type SearchPageDataType = {
  searchData: ResultType[];
  countResults: number;
};

export type ResultType = Pick<
  FetchDataType['response']['docs'][number],
  | 'web_url'
  | 'pub_date'
  | 'headline'
  | 'byline'
  | 'abstract'
  | 'uri'
  | 'news_desk'
> & {
  multimedia: Pick<
    FetchDataType['response']['docs'][number]['multimedia'][number],
    'url' | 'credit' | 'caption'
  >[];
};

export type FetchDataType = {
  copyright: string;
  response: Response;
  status: string;
};

type Response = {
  docs: SearchResultsType[];
  meta: Meta;
};

type SearchResultsType = {
  abstract: string;
  byline: Byline;
  document_type: string;
  headline: Headline;
  keywords: Keyword[];
  lead_paragraph: string;
  multimedia: MultimediaType[];
  news_desk: string;
  print_page: number | string;
  print_section: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
};

type Meta = {
  hits: number;
  offset: number;
  time: number;
};

type MultimediaType = {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: Legasy;
  crop_name: string;
};

type Legasy = {
  xlarge: string;
  xlargewidth: number;
  xlargeheight: number;
};

type Headline = {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
};

type Keyword = {
  name: string;
  value: string;
  rank: number;
  major: string;
};

type Byline = {
  original: string;
  person: Person[];
  organization: string;
};

type Person = {
  firstname: string;
  middlename: string;
  lastname: string;
  qualifier: string;
  title: string;
  role: string;
  organization: string;
  rank: number;
};
