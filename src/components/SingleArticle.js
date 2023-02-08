import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle, getComments } from "../utils/api";
import Comment from "./Comment";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => setArticle(article));
    getComments(article_id).then((comments) => setComments(comments));
  }, [article_id]);

  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <h3>Comments:</h3>

      {comments.map((comment) => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
};
export default SingleArticle;
