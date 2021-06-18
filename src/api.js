import axios from "axios";

const REST_API_KEY = "0539a2d325658c560bc7ba4c250a8489";
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`,
  },
});
export const bookSearch = (params) => {
  return Kakao.get("/v3/search/book", { params });
};
