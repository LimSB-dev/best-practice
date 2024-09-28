import { usePost } from "hooks/usePost";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setPost } from "store/modules/post";

export const PostEditForm = () => {
  const id = Number(useParams<{ id: string }>().id);
  const { data, isLoading } = usePost(id);
  const post = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState(post.title);

  useEffect(() => {
    dispatch(setPost(data));
    if (data) {
      setTitle(data.title);
    }
  }, [dispatch, id, data]);

  if (isLoading) return <>Loading</>;

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
