export type TextCardType = {
  author?: string;
  title: string;
  text?: string;
  time: string;
  size: 'S' | 'M' | 'L';
};

export type TextCardWithImgYType = TextCardType & {
  isShare: boolean;
  by: string;
  url: string;
  imgAuthor: string;
  isRevers: boolean;
};

export type TextCardWithImgRightType = Omit<
  TextCardWithImgYType,
  'isRevers' | 'imgAuthor'
>;
