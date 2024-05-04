import axios from "axios";
axios.defaults.baseURL = `https://wiki-search-engine.onrender.com`;
// axios.defaults.baseURL = `http://localhost:8000`;

export default function search(
  text: string,
  indexType: string,
  searchType: string
) {
  return axios
    .get(`/search/${searchType}/${indexType}/${text}`)
    .then((res) => res?.data?.suggestions)
    .catch((err) => {
      throw new Error(err.response.data);
    });
}
