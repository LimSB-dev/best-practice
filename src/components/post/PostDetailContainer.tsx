import { usePost } from "hooks/usePost";

export default function PostDetailContainer({ id }: { id: number }) {
  const { data, isLoading } = usePost(id);
  console.log("🚀 ~ PostDetailContainer ~ data, isLoading:", data, isLoading);

  if (isLoading) return <>하위 컴포넌트</>;
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
}
