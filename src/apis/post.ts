import customAxios from "apis/customAxios";
import { QUERY } from "constants/queryKey";

// 전체 게시글을 가져오는 함수
export const fetchPosts = async () => {
  const response = await customAxios.get(QUERY.GET_POSTS.url);
  return response.data;
};

// 특정 ID의 게시글을 가져오는 함수
export const fetchPost = async (id: number) => {
  const { data } = await customAxios.get(QUERY.GET_POST(id).url);
  return data;
};

export const createPost = async (id: number, createdData: IPost) => {
  const response = await customAxios.post(
    `${QUERY.POST_POST(id).url}`,
    createdData
  );

  return response.data as IPost;
};

// 게시글을 수정하는 함수
export const updatePost = async (updatedData: IPost) => {
  const response = await customAxios.put(
    `${QUERY.PUT_POST(updatedData.id).url}`,
    updatedData
  );

  return response.data as IPost;
};

// 게시글을 삭제하는 함수
export const deletePost = async (id: number) => {
  const response = await customAxios.delete(`${QUERY.DELETE_POST(id).url}`);

  return response.data as IPost;
};
