import React from "react";
import { useQuery } from "react-query";

export default function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch("http://localhost:3030").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(1)


  return (
    <ul>
      {data.map(({ text }) => {
        return <p>{text}</p>;
      })}
    </ul>
  );
}
