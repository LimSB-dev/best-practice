import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  deletePost,
  fetchPost,
  fetchPosts,
  updatePost,
} from "apis/post";
import { QUERY } from "constants/queryKey";

/**
 * 모든 게시물 데이터 호출
 */
export const usePosts = () => {
  return useQuery({ queryKey: [QUERY.GET_POSTS], queryFn: () => fetchPosts() });
};

/**
 * 게시물 상세 데이터 호출
 * @params id: 게시글 아이디
 */
export const usePost = (id: number) => {
  return useQuery({
    queryKey: QUERY.GET_POST(id).key,
    queryFn: () => fetchPost(id),
    enabled: !!id,
  });
};

/**
 * 게시글 생성
 */
export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (createdPost: IPost) => createPost(createdPost.id, createdPost),
    onSuccess: (createdPost) => {
      queryClient.invalidateQueries({
        queryKey: QUERY.GET_POST(createdPost.id).key,
      });
    },
  });
};

/**
 * 게시물 수정
 */
export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedPost: IPost) => updatePost(updatedPost),
    onSuccess: (updatedPost) => {
      queryClient.invalidateQueries({
        queryKey: QUERY.GET_POST(updatedPost.id).key,
      });
    },
  });
};

/**
 * 게시물 삭제 Hook
 */
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: (deletedPost) => {
      queryClient.invalidateQueries({
        queryKey: QUERY.GET_POSTS.key,
      });
    },
  });
};
