import customAxios from "apis/customAxios";

// 전체 게시글을 가져오는 함수
export const fetchPosts = async () => {
  const response = await customAxios.get("/posts");
  return response.data;
};

// 특정 ID의 게시글을 가져오는 함수
export const fetchPost = async (id: string) => {
  const { data } = await customAxios.get(`/posts/${id}`);
  return data;
};
