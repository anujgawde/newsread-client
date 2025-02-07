import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.SERVER_BASE_URL}/`,
});

export const getAllArticles = async (queryParams) => {
  try {
    const response = await api.get(
      `/articles/get-all-articles?query=${queryParams}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// export const searchArticles = async (searchText) => {
//   try {
//     const response = await api.post(`/articles/search?query=${searchText}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error;
//   }
// };

// export const getTrendingArticles = async () => {
//   try {
//     const response = await api.get(`/articles/get-trending-articles`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error;
//   }
// };

// export const getLatestArticles = async () => {
//   try {
//     const response = await api.get(`/articles/get-latest-articles`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error;
//   }
// };

export const readArticle = async (id) => {
  try {
    const response = await api.post(`/articles/read-article`, { id });
    return response.data;
  } catch (error) {
    console.error("Error Reading Article:", error);
    throw error;
  }
};

export const getArticleById = async (articlId) => {
  try {
    const response = await api.get(`/articles/${articlId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Article:", error);
  }
};

export const updateVisitCount = async (visitData) => {
  try {
    await api.post(`/articles/update-article-visits`, visitData);
  } catch (error) {
    console.error("Error updating visiting count:", error);
  }
};
