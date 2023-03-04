import React, { useEffect, useState } from "react";
import { deleteComment, getComments } from "../utils/api";

const Comment = ({ article_id, comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    getComments(article_id).then((apiComments) => setComments(apiComments));
  }, [article_id]);

  const handleClick = (comment_id) => {
    setIsLoading(true);
    deleteComment(comment_id)
      .then(() => {
        setComments((currComments) => {
          return currComments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
        });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  };

  return (
    <div className="comments margin-bottom-medium">
      <h3 className="margin-bottom-small">Comments:</h3>
      <div className="article-card">
        {comments.length === 0 ? (
          <p>No comments</p>
        ) : (
          comments.map((comment) => (
            <div
              className="comment margin-bottom-medium"
              key={comment.comment_id}
            >
              <h4 className="margin-bottom-small">{comment.author}</h4>
              <p className="left-align">{comment.body}</p>

              {comment.author === "jessjelly" ? (
                <button
                  className="button margin-top-medium"
                  disabled={isLoading}
                  onClick={() => handleClick(comment.comment_id)}
                >
                  Delete
                </button>
              ) : (
                <></>
              )}
              <div className="line margin-top-medium"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Comment;
