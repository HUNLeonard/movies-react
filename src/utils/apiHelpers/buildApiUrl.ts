import { GetMovieParams } from "../../interfaces/serviceMovieParams";
import { cn } from "../cn";
import { BASE_URL } from "../constants";

/**
 * Constructs the API URL based on the provided parameters
 */
export const buildApiUrl = (params: GetMovieParams): string => {
  const {
    page = 1,
    popular,
    toprated,
    includeAdult = false,
    search,
    sorting,
    sortDesc,
    filterBy,
    filterValue,
  } = params;

  // If searching without filters/sorting, use search endpoint
  if (search && !(sorting || filterValue)) {
    return cn(
      `${BASE_URL}/search/movie`,
      "?query=",
      search,
      `&include_adult=true`,
      "&language=en-US",

      `&page=${page}`,
    ).join("");
  }

  // For popular/top-rated or discover endpoints
  const baseEndpoint = popular || toprated ? "movie" : "discover/movie";

  return cn(
    `${BASE_URL}/${baseEndpoint}`,
    popular ? "/popular?" : "",
    toprated ? "/top_rated?" : "",
    !popular && !toprated ? `?include_adult=${includeAdult}&` : "",
    `language=en-US&page=${page}`,
    "&vote_count.gte=40",
    sorting ? `&sort_by=${sorting}.${sortDesc}` : "",
    filterBy && filterValue ? `&with_${filterBy}=${filterValue}` : "",
  ).join("");
};
