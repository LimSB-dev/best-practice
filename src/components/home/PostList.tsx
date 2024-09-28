import { usePosts } from "hooks/usePost";
import { Link } from "react-router-dom";

export const PostList = () => {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <>Loading</>;
  if (error) return <div>Error fetching posts</div>;
  return (
    <ul>
      {data ? (
        data.map((post: any) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))
      ) : (
        <p>No data available</p>
      )}
    </ul>
  );
};
