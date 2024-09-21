export default function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  return <div>book/[id] page {params.id}</div>;
}
