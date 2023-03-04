import React, { useState } from "react";
import { postComment } from "../utils/api";

const AddComment = ({ article_id, comments, setComments }) => {
  const [body, setBody] = useState("");
  const [submitTrue, setSubmitTrue] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, "jessjelly", body).then((newComment) => {
      console.log(newComment);
      setComments((currComments) => [newComment, ...currComments.slice(0, -1)]);
      setBody("");
      setSubmitTrue(true);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Comment"
          value={body}
          required
          onChange={(event) => {
            setBody(event.target.value);
            setSubmitTrue(false);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <p style={{ display: submitTrue ? "block" : "none" }}>Comment Posted!</p>
    </>
  );
};
export default AddComment;
