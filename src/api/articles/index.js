import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.SERVER_BASE_URL}/`,
});

export const getLatestArticles = async () => {
  try {
    const response = await api.get(`/articles/`);
    console.log("inside", response);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
export const readArticle = async (id) => {
  try {
    const response = await api.post(`/articles/read-article`, { id });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
