import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.SERVER_BASE_URL}/`,
});

export const getLatestArticles = async () => {
  try {
    const response = await api.get(`/articles/get-all-articles`);
    return response.data;
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

export const getArticleById = async (articlId) => {
  try {
    const response = await api.get(`/articles/${articlId}`);
    return response.data;
  } catch (e) {}
};

export const updateVisitCount = async (visitData) => {
  try {
    const response = await api.post(
      `/articles/update-article-visits`,
      visitData
    );
  } catch (e) {}
};
