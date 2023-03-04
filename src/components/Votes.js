import React, { useState } from "react";
import { voteArticle } from "../utils/api";

const Votes = ({ votes, article_id }) => {
  const [usersVote, setUsersVote] = useState(0);
  const [error, setError] = useState(null);
  const handleClick = (voteAmount) => {
    voteArticle(article_id, voteAmount)
      .then(() => {
        setUsersVote((currVotes) => {
          return currVotes + voteAmount;
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="votes margin-bottom-medium">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p className="margin-bottom-small">Votes: {votes + usersVote}</p>
          <button
            className="button upvote-button margin-right-small white"
            onClick={() => handleClick(1)}
          >
            Upvote
          </button>
          <button
            className="button downvote-button margin-left-small white"
            onClick={() => handleClick(-1)}
          >
            Down Vote
          </button>
        </>
      )}
    </div>
  );
};
export default Votes;
