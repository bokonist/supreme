import { useEffect, useState } from "react";

const useFetch = (url: string, dependencies: []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    console.log("data being fetched");
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((responseBody) => {
        setTimeout(() => {
          setIsLoading(false);
          setFetchedData(responseBody);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  }, [...dependencies, url]);
  return [isLoading, fetchedData];
};

export { useFetch };
