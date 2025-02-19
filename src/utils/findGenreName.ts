import { genres } from "../interfaces/MovieGenres";

export const findGenreName = (arg: number) => {
  const genreObj = Object.entries(genres).find(([_name, id]) => id === arg);
  return genreObj?.[0];
};
