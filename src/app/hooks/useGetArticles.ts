"use client";

import { useEffect, useState } from "react";

interface ProductsProps {
  id: number;
  name: string;
  price: string;
}

export const useGetArticles = () => {
  const [articles, setArticles] = useState<ProductsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/get-articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.toString());
      });
  }, []);

  return { articles, loading, error };
};
