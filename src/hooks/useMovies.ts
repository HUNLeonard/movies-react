import { useMemo } from "react";
import {
  GetMovieParams,
  PaginationResult,
} from "../interfaces/serviceMovieParams";
import { getMovies } from "../services/movies/getMovies";
import { useQuery } from "@tanstack/react-query";

export const useMovies = ({ ...params }: GetMovieParams) => {
  const memoParam = useMemo(() => params, []);

  const { data, error, isError, isLoading, refetch } = useQuery<
    PaginationResult,
    Error
  >({
    queryKey: ["movies", params],
    queryFn: ({ signal }) => getMovies(params, signal),

    enabled: !!memoParam,
    staleTime: 600000,
    refetchInterval: 600000,
    retry: 5,
  });

  return { data, isError, error, isLoading, refetch };
};
