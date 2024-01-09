type MediaType = {
  copyright: string;
  url: string;
};

export type NewsType = {
  abstract: string;
  byline: string;
  des_facet: string[];
  multimedia: MediaType[];
  title: string;
  url: string;
  section: string;
  kicker: string;
  subsection: string;
};

export type NewsDataSlice = {
  mainNews: {
    mainColumn: NewsType[][];
    opinions: NewsType[];
    sundayreview: NewsType[];
  };
  moreNews: {
    leftColumn: NewsType[];
    centerColumn: NewsType;
    rightColumn: NewsType[];
  };
  cultureNews: {
    mainNews: NewsType;
    rightColumn: NewsType[];
  };
};
