import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <header>
      <h1>Posts</h1>
      <Link to={"post/create"}>생성</Link>
    </header>
  );
};
