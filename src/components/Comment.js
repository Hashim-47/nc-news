import React, { useState, useEffect } from "react";
import { getComments } from "../utils/api";

const Comment = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((comments) => setComments(comments));
  }, [article_id]);

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
          </div>
        ))
      )}
    </div>
  );
};
export default Comment;
