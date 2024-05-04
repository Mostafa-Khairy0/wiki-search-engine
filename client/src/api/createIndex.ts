import axios from "axios";
axios.defaults.baseURL = `https://wiki-search-engine.onrender.com`;
// axios.defaults.baseURL = `http://localhost:8000`;

export default function createIndex(type: string, preprocess: string[]) {
  return axios.post(`/createIndex/${type}`, { preprocess }).catch((err) => {
    throw new Error(err.response.data);
  });
}
