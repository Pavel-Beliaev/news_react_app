export type TextCardType = {
  author?: string;
  title: string;
  text?: string;
  time: string;
  size: 'S' | 'M' | 'L';
  article: string;
  articleData?: {
    byline: string;
    title: string;
    caption: string;
    copyright: string;
    created_date: string;
    description: string;
    img: string;
    url: string;
  };
};

export type TextCardWithImgYType = TextCardType & {
  isShare?: boolean;
  by?: string;
  url: string;
  imgAuthor?: string;
  isRevers?: boolean;
};

export type TextCardWithImgRightType = Omit<
  TextCardWithImgYType,
  'isRevers' | 'imgAuthor'
>;
