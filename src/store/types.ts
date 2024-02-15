import { FetchAPIDataType } from './mainNewsSlice';

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
