interface IComment {
  id: number;
  body: string;
  postId: IPost.id;
}
