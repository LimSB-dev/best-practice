import { useParams } from "react-router-dom";
import { usePost } from "hooks/usePost";

function Post() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = usePost(id ?? "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching post</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default Post;
