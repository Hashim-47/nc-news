import axios from "axios";

const myAPI = axios.create({
  baseURL: "https://my-nc-news.onrender.com/api",
});

export const getArticles = () => {
  return myAPI.get("/articles").then((res) => res.data.articles);
};
