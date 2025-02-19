export const API_GET_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_KEY,
  },
};

export const MAXRESULTS = 20;
export const MAXMOVIELISTSHOW = 12;
export const BASE_URL = "https://api.themoviedb.org/3";
