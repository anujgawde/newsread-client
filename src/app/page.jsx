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
    setArticles(latestArticlesResult);
  };

  const readArticleHandler = async (id) => {
    const readArticleResponse = await readArticle(id);
    const articleAudio = new Audio(readArticleResponse);
    articleAudio.play();
  };

  useEffect(() => {
    fetchLatestArticles();
  }, []);
  return (
    <div className="h-full">
      {articles.map((article) => (
        <ArticlesItem key={article.id} article={article} />
      ))}
    </div>
  );
}
