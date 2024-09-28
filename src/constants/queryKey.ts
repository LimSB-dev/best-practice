import { Method } from "axios";

// Url
export const BASE_URL = "http://localhost:3001";

type QueryType = "posts" | "comments" | "profile";

const createQuery = (method: Method, type: QueryType, id?: number) => ({
  key: id ? [`${method}_${type}`, id] : [`${method}_${type}`],
  url: id ? `${type}/${id}` : type,
});

export const QUERY = {
  // posts
  GET_POSTS: createQuery("get", "posts"),
  GET_POST: (id: number) => createQuery("get", "posts", id),
  POST_POST: () => createQuery("post", "posts"),
  PUT_POST: (id: number) => createQuery("put", "posts", id),
  DELETE_POST: (id: number) => createQuery("delete", "posts", id),

  // comments
  GET_COMMENTS: createQuery("get", "comments"),
  GET_COMMENT: (id: number) => createQuery("get", "comments", id),

  // profile
  GET_PROFILE: (id: number) => createQuery("get", "profile", id),
};
