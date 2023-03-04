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
    <div className="comments">
      <h3>Comments:</h3>
      {comments.length === 0 ? (
        <p>No comments</p>
      ) : (
        comments.map((comment) => (
          <div className="comment" key={comment.comment_id}>
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>

            {/* {error === true ? (
              <p>Failed to delete comment, try again later</p>
            ) : (
              <></>
            )} */}

            {comment.author === "jessjelly" ? (
              <button
                disabled={isLoading}
                onClick={() => handleClick(comment.comment_id)}
              >
                Delete
              </button>
            ) : (
              <></>
            )}
          </div>
        ))
      )}
    </div>
  );
};
export default Comment;
