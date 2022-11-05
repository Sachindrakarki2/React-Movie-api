import axios from "axios";

export const fetchData = (str) => {
  const apiEp = `http://www.omdbapi.com/?i=tt3896198&apikey=ab287436&t=${str}`;

  const response = axios(apiEp);

  return response;
};
