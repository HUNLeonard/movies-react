import { FilterProp } from "./FilterProp";
import { MovieModel } from "./MovieModel";

export interface ApiResponseType {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieModel[];
}

export interface PaginationResult {
  movies: MovieModel[];
  currentPage: number;
  totalPages: number;
  totalResults: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

type GetPopularMovieParams = {
  page?: number;
  popular?: boolean;

  toprated?: never;

  includeAdult?: never;
  experimental?: never;
  search?: never;
  filterBy?: never;
  filterValue?: never;
  sorting?: never;
  sortDesc?: never;
};

type GetTopRatedMovieParams = {
  page?: number;
  toprated?: boolean;

  popular?: never;

  includeAdult?: never;
  experimental?: never;
  search?: never;
  filterBy?: never;
  filterValue?: never;
  sorting?: never;
  sortDesc?: never;
};

type GetSpecialMovieParams = {
  page?: number;
  popular?: never;
  toprated?: never;
  includeAdult?: boolean;
  experimental?: never;
  search?: never;
  filterBy?: FilterProp["filterBy"];
  filterValue?: FilterProp["filterValue"];
  sorting?: FilterProp["sorting"];
  sortDesc?: FilterProp["sortDesc"];
};

type EXPERIMENTAL_GetSpecialMovieParams = {
  page?: number;
  popular?: never;
  toprated?: never;

  includeAdult?: boolean;
  experimental?: FilterProp["experimental"];
  search?: FilterProp["search"];
  filterBy?: FilterProp["filterBy"];
  filterValue?: FilterProp["filterValue"];
  sorting?: FilterProp["sorting"];
  sortDesc?: FilterProp["sortDesc"];
};

type GetNamedMovieParams = {
  page?: number;
  popular?: never;
  toprated?: never;

  includeAdult?: boolean;
  experimental?: never;
  search?: FilterProp["search"];
  filterBy?: never;
  filterValue?: never;
  sorting?: never;
  sortDesc?: never;
};

export type GetMovieParams =
  | GetPopularMovieParams
  | GetTopRatedMovieParams
  | GetSpecialMovieParams
  | GetNamedMovieParams
  | EXPERIMENTAL_GetSpecialMovieParams;
