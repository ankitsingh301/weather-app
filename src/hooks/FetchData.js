import { useEffect, useLayoutEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("ERROR>>>>", err);
    }
  }

  useLayoutEffect(() => {
    getData();
  }, [url]);

  return { data, loading };
}
