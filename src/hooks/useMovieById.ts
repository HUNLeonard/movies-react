import { MovieModel } from "../interfaces/MovieModel";
import { getMovieById } from "../services/movies/getMovieById";
import { useQuery } from "@tanstack/react-query";

export const useMovieById = (id: number) => {
  const {
    data: movie,
    error,
    isError,
    isLoading,
    refetch,
  } = useQuery<MovieModel, Error>({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
    enabled: !!id,
    retry: 5,
  });

  return { movie, isError, error, isLoading, refetch };
};
