import React from "react";

const Article = ({ article }) => {
  return (
    <div className="Article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};
export default Article;
