import useSWR from "swr";

export default function Profile() {
  function useUser(id) {
    const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher);

    return {
      user: data,
      isLoading,
      isError: error,
    };
  }
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/user/123", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return <div>hello {data.name}!</div>;
}
