import axios from "axios";

const myAPI = axios.create({
  baseURL: "https://my-nc-news.onrender.com/api",
});

export const getArticles = () => {
  return myAPI.get("/articles").then((res) => res.data.articles);
};

export const getArticle = (article_id) => {
  return myAPI.get(`/articles/${article_id}`).then((res) => res.data.article);
};
