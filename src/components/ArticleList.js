import React, { useState, useEffect } from "react";
import Article from "./Articles";
import { getArticles } from "../utils/api";
import Topics from "./Topics";
import SortBy from "./SortBy";
import OrderBy from "./OrderBy";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(undefined);
  const [selectedSortBy, setSelectedSortBy] = useState(undefined);
  const [selectedOrderBy, setSelectedOrderBy] = useState("desc");

  useEffect(() => {
    setIsLoading(true);
    getArticles(selectedTopic, selectedSortBy, selectedOrderBy)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [selectedTopic, selectedSortBy, selectedOrderBy]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ArticleList">
      <div>
        <Topics
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        <SortBy
          selectedSortBy={selectedSortBy}
          setSelectedSortBy={setSelectedSortBy}
        />
        <OrderBy
          selectedOrderBy={selectedOrderBy}
          setSelectedOrderBy={setSelectedOrderBy}
        />
      </div>
      {articles.map((article) => (
        <Article key={article.article_id} article={article} />
      ))}
    </div>
  );
};
export default ArticleList;
