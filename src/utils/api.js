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

export const voteArticle = (article_id, vote) => {
  return myAPI
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((res) => res.data.votes)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getComments = (article_id) => {
  return myAPI
    .get(`/articles/${article_id}/comments`)
    .then((res) => res.data.comments);
};
