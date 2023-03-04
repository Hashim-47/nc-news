import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import Votes from "./Votes";
import Comment from "./Comment";
import AddComment from "./AddComment";
import PageNotFound from "./PageNotFound";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    getArticle(article_id)
      .then((article) => setArticle(article))
      .catch(() => {
        setError(true);
      });
  }, [article_id]);

  if (error === true) {
    return <PageNotFound />;
  }

  return (
    <div className="single-article container">
      <div className="article-card margin-bottom-large">
        <h2 className="margin-bottom-medium">{article.title}</h2>
        <p className="margin-bottom-small">{article.body}</p>
        <Votes article_id={article_id} votes={article.votes} />
        <AddComment
          article_id={article_id}
          comments={comments}
          setComments={setComments}
        />
      </div>
      <Comment
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
    </div>
  );
};
export default SingleArticle;
