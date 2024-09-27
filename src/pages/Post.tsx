import { useParams } from "react-router-dom";
import { useDeletePost, usePost, useUpdatePost } from "hooks/usePost";
import PostDetailContainer from "components/post/PostDetailContainer";
import { Suspense } from "react";

function Post() {
  const id = Number(useParams<{ id: string }>().id);
  const { mutate: updatePost } = useUpdatePost();
  const { mutate: deletePost } = useDeletePost();

  const handleUpdate = (updatedData: IPost) => {
    updatePost(updatedData);
  };

  const handleDelete = (id: number) => {
    deletePost(id);
  };

  return (
    <div>
      <button
        onClick={() =>
          handleUpdate({ id: id, title: "강제 수정", author: "typicode" })
        }
      >
        수정
      </button>
      <button onClick={() => handleDelete(id)}>삭제</button>
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetailContainer id={id} />
      </Suspense>
    </div>
  );
}

export default Post;
