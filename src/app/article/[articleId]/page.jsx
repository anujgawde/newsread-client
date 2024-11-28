"use client";
import { getArticleById } from "@/api/articles";
import ArticlesItem from "@/app/components/articles/ArticlesItem";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArticleDetailPage() {
  const [article, setArticle] = useState();
  const params = useParams();
  const getArticleHandler = async () => {
    const getArticleResponse = await getArticleById(params.articleId);
    setArticle(getArticleResponse);
  };

  useEffect(() => {
    let visitData = {};

    if (JSON.parse(localStorage.getItem("visitCounts"))) {
      visitData = JSON.parse(localStorage.getItem("visitCounts"));
    }
    visitData[params.articleId] = visitData[params.articleId]
      ? visitData[params.articleId] + 1
      : 1;
    localStorage.setItem("visitCounts", JSON.stringify(visitData));
    getArticleHandler();
  }, []);
  return (
    article && (
      <>
        <ArticlesItem key={article.id} article={article} />

        <div className="my-4 items-center py-2 text-sm md:text-base font-tinos px-4">
          <p className="text-lg">
            {new Date(article.datePublished).toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <p>Source: {article.sourceUrl}</p>
        </div>

        {/* Main Content */}
        <div className="px-4 text-justify text-sm font-tinos">
          {article.content}
        </div>
      </>
    )
  );
}
