import { Link } from "react-router-dom";
import { usePosts } from "hooks/usePost";

function Home() {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
