import React, { useState, useEffect } from "react";
import { getTopics } from "../utils/api";

const Topics = ({ selectedTopic, setSelectedTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setSelectedTopic(undefined);
    } else {
      setSelectedTopic(e.target.value);
    }
  };

  return (
    <div className="topic margin-right-small">
      <select
        className="padding-small remove-padding-mobile"
        onChange={handleChange}
        id="topic"
        value={selectedTopic}
      >
        <option value="">All Topics</option>
        {topics.map((topic) => (
          <option key={topic.slug} value={topic.slug}>
            {topic.slug}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Topics;
