import { useState } from "react";

const usePost = (url, body) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postRequest = async () => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        signal,
      });

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      const data = await response.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

    return () => {
      abortController.abort();
    };
  };

  return { data, loading, error, postRequest };
};

export default usePost;
