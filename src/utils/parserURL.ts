export const parserURL = (uri: string): string => {
  return uri.split('/').slice(-1).join('');
};
