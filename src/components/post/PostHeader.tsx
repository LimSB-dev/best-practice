import { Button } from "components/common/Button";
import { useDeletePost, useUpdatePost } from "hooks/usePost";
import { useAppSelector } from "hooks/useRedux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export const PostHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditPage = location.pathname.endsWith("/edit");
  const post = useAppSelector((state) => state.post);
  const id = Number(useParams<{ id: string }>().id);
  const { mutate: updatePost } = useUpdatePost();
  const { mutate: deletePost } = useDeletePost();

  const handleDelete = () => {
    deletePost(id);
  };

  const handleUpdate = () => {
    updatePost(post);
    navigate(`/posts/${id}`);
  };

  return (
    <header>
      <h1>{title}</h1>
      {isEditPage ? (
        <div>
          <Link to={`/post/${id}`}>취소</Link>
          <Button type="button" label="저장" onClick={() => handleUpdate()} />
          <Button type="button" label="삭제" onClick={() => handleDelete()} />
        </div>
      ) : (
        <div>
          <Link to={`/post/${id}/edit`}>수정</Link>
          <Button type="button" label="삭제" onClick={() => handleDelete()} />
        </div>
      )}
    </header>
  );
};
