import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => setArticle(article));
  }, [article_id]);

  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};
export default SingleArticle;
