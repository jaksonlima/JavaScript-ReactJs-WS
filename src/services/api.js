import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/",
});

export const apiPort = (port) => {
  return axios.create({
    baseURL: `http://localhost:${port}/`,
  });
};
