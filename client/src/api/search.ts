import axios from "axios";
axios.defaults.baseURL = `https://wiki-search-engine.onrender.com`;

export default function search(text: string) {
  return axios
    .get(`/search/${text}`)
    .then((res) => res?.data?.suggestions)
    .catch((err) => {
      throw new Error(err.response.data);
    });
}
