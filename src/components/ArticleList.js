import React, { useState, useEffect } from "react";
import Article from "./Articles";
import { getArticles } from "../utils/api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ArticleList">
      {articles.map((article) => (
        <Article key={article.article_id} article={article} />
      ))}
    </div>
  );
};
export default ArticleList;
