"use client";

import { useEffect, useState } from "react";
import { getLatestArticles, readArticle } from "../api/articles";
import ArticlesItem from "./components/articles/ArticlesItem";

export default function AllNewsPage() {
  // State:
  const [articles, setArticles] = useState([]);

  // Functions:
  const fetchLatestArticles = async () => {
    const latestArticlesResult = await getLatestArticles();
    setArticles(latestArticlesResult.articles);
  };

  useEffect(() => {
    fetchLatestArticles();
  }, []);
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
