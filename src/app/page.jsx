"use client";

import { useEffect, useState } from "react";
import { getAllArticles } from "../api/articles";
import ArticlesItem from "./components/articles/ArticlesItem";
import { useSearchParams } from "next/navigation";

export default function AllNewsPage() {
  const params = useSearchParams();

  // State:
  const [articles, setArticles] = useState([]);

  // Functions:
  const fetchAllArticles = async () => {
    const latestArticlesResult = await getAllArticles(params.get("s"));
    setArticles(latestArticlesResult.articles);
  };

  useEffect(() => {
    fetchAllArticles();
  }, [params]);

  return (
    <div className="flex h-full justify-center">
      <div className=" lg:max-w-6xl">
        {articles.map((article) => (
          <ArticlesItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
