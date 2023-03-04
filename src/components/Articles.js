import React from "react";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <div className="article-card margin-bottom-medium">
      <Link to={`/articles/${article.article_id}`}>
        <h2 className="margin-bottom-medium title-colour">{article.title}</h2>
        <p>Written By: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Date: {article.created_at}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </Link>
    </div>
  );
};
export default Article;
