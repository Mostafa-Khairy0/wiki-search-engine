import axios from "axios";
axios.defaults.baseURL = `http://localhost:8000`;

export default function search(text: string) {
  return axios
    .get(`/search/${text}`)
    .then((res) => res?.data?.suggestions)
    .catch((err) => {
      throw new Error(err.response.data);
    });
}
