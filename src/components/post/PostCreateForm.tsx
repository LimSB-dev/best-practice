import { useAppSelector } from "hooks/useRedux";
import { useState } from "react";

export const PostCreateForm = () => {
  const post = useAppSelector((state) => state.post);
  const [title, setTitle] = useState(post.title);

  return (
    <form>
      <label htmlFor="title">제목</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
