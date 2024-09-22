export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  console.log(searchParams);
  return <div>Search {searchParams.q}</div>;
}
