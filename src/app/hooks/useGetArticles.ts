"use client";

import { useEffect, useState } from "react";

export const useGetArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("/api/get-articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, []);

  return { articles, loading, error };
};
