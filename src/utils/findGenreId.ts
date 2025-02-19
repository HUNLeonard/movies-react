import { genres } from "../interfaces/MovieGenres";

export const findGenreId = (arg: string) => {
  const genreObj = Object.entries(genres).find(
    ([name, _id]) => name.toLowerCase() === arg.toLowerCase(),
  );
  return genreObj?.[1];
};
// genres.filter((genre) => genre.name.toLowerCase() === arg.toLowerCase())[0]
//   .id;
