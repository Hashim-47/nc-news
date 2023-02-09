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
    <div className="votes">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p>Votes: {votes + usersVote}</p>
          <button onClick={() => handleClick(1)}>Upvote</button>
          <button onClick={() => handleClick(-1)}>Down Vote</button>
        </>
      )}
    </div>
  );
};
export default Votes;
