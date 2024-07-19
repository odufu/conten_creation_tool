import axios from "axios";

const BASE_URL = "https://picsum.photos/v2";

export const getImages = async (page: number, limit: number) => {
  const response = await axios.get(`${BASE_URL}/list`, {
    params: { page, limit },
  });
  return response.data;
};
