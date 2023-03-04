import axios from "axios";

const myAPI = axios.create({
  baseURL: "https://my-nc-news.onrender.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  return myAPI
    .get("/articles", { params: { topic, sort_by, order } })
    .then((res) => res.data.articles);
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

export const postComment = (article_id, username, body) => {
  return myAPI
    .post(`/articles/${article_id}/comments`, {
      username,
      body,
    })
    .then((res) => res.data.comment)
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getTopics = () => {
  return myAPI.get(`/topics`).then((res) => res.data.topics);
};

export const deleteComment = (comment_id) => {
  return myAPI.delete(`/comments/${comment_id}`);
};
