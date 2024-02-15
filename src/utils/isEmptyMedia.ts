import { NewsType } from '../store/types';

export function isNotEmpty<
  T extends NewsType['multimedia'],
  P = 'url' | 'copyright' | 'caption',
>(entity: T, placeNumber: number, prop: P): string {
  if (!!entity) {
    switch (prop) {
      case 'url':
        return entity[placeNumber].url;
      case 'copyright':
        return entity[placeNumber].copyright;
      default:
        return entity[placeNumber].caption;
    }
  } else {
    return '';
  }
}
