import { useQuery } from "@tanstack/react-query";
import { fetchPost, fetchPosts } from "apis/post";

export const usePosts = () => {
  return useQuery({ queryKey: ["posts"], queryFn: () => fetchPosts() });
};

export const usePost = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
    enabled: !!id,
  });
};
