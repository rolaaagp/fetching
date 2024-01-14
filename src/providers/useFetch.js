import { useState, useEffect } from "react";

export function useFetch(url, options) {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { data };
}
