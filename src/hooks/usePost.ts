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
 * 모든 게시물 데이터
 */
export const usePosts = () => {
  return useQuery<IPost[], Error>({
    queryKey: [QUERY.GET_POSTS.key],
    queryFn: () => fetchPosts(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};

/**
 * 게시물 상세 데이터
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
    mutationFn: createPost,
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
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      queryClient.invalidateQueries({
        queryKey: QUERY.GET_POST(updatedPost.id).key,
      });
    },
  });
};

/**
 * 게시물 삭제
 */
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: (deletedPost) => {
      queryClient.invalidateQueries({
        queryKey: QUERY.GET_POSTS.key,
      });
    },
  });
};
