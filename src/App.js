import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import "./App.css";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Link to={`/`}>
        <h1 id="title-header">NC-News</h1>
      </Link>

      <Routes>
        <Route path="/" element={<ArticleList />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}
export default App;
