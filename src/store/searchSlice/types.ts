export type SearchNewsSlice = {
  searchData: SearchDataType[];
  page: number;
  sort: 'newest' | 'oldest' | 'relevance';
  status: 'loading' | 'success' | 'error';
  code: string;
};

export type ParamsType = {
  query: string;
  page: number;
  sort: 'newest' | 'oldest' | 'relevance';
};

export type SearchDataType = {
  abstract: string;
  byline: {
    original: string;
  };
  headline: {
    main: string;
  };
  multimedia: [{ url: string }];
  pub_date: string;
  section_name: string;
  uti: string;
  web_url: string;
};

export type FetchDataType = {
  response: {
    docs: SearchDataType[];
  };
};
