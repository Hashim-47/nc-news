import React from "react";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <div className="Article">
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </Link>
    </div>
  );
};
export default Article;
