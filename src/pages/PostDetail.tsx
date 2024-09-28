import { PostDetailContainer } from "components/post/PostDetailContainer";
import { PostHeader } from "components/post/PostHeader";
import { usePost } from "hooks/usePost";
import { useParams } from "react-router-dom";

function PostDetail() {
  const id = Number(useParams<{ id: string }>().id);
  const { data, isLoading, error } = usePost(id);

  if (isLoading) return <>Loading</>;
  if (error) return <>{error.message}</>;

  return (
    <>
      {data ? (
        <>
          <PostHeader title={data.title} />
          <PostDetailContainer data={data} />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}

export default PostDetail;
