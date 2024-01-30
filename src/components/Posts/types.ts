import { ArticleDataType } from '../../store';

export type PropsType = {
  type: 'notImg' | 'imgUpDown' | 'imgRight' | 'imgInner';
  articleData: ArticleDataType;
  title: string;
  size: 'S' | 'M' | 'L';
  time: string;
  idArticle: string;
  author?: string;
  description?: string;
  byline?: string;
  img?: string;
  isShare?: boolean;
  copyright?: string;
  isRevers?: boolean;
};
