import { MovieModel } from "../../interfaces/MovieModel";
import { API_GET_options } from "../../utils/constants";

export const getMovieById = async (id: number): Promise<MovieModel> => {
  const URL = `https://api.themoviedb.org/3/movie/${id}`;
  try {
    const response = await fetch(URL, API_GET_options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieModel = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    throw error;
  }
};
