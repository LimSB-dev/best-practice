import { PostEditForm } from "components/post/PostEditForm";
import { PostHeader } from "components/post/PostHeader";
import { usePost } from "hooks/usePost";
import { useParams } from "react-router-dom";

export default function PostEdit() {
  const id = Number(useParams<{ id: string }>().id);
  const { data, isLoading, error } = usePost(id);

  if (isLoading) return <>Loading</>;
  if (error) return <>{error.message}</>;

  return (
    <>
      {data ? (
        <>
          <PostHeader title={data.title} />
          <PostEditForm />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}
