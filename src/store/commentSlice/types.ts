export type CommentType = {
  name: string;
  text: string;
  id: number;
  time: number;
};

export type CommentsSLiceType = {
  comments: CommentType[];
  id: number;
};
