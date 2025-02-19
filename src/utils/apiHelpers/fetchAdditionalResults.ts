import { MovieModel } from "../../interfaces/MovieModel";
import { ApiResponseType } from "../../interfaces/serviceMovieParams";
import { API_GET_options, MAXRESULTS } from "../constants";

/**
 * Fetches additional results when experimental search is enabled
 * This is for the Title + Filter + Sort search (deprecated, well ye, removed)
 */
export const fetchAdditionalResults = async (
  baseUrl: string,
  search: string,
  currentResultsLength: number,
  currentPage: number,
  totalPages: number,
  signal: AbortSignal,
): Promise<any[]> => {
  const additionalResults = [];
  let page = currentPage + 1;

  while (
    currentResultsLength + additionalResults.length < MAXRESULTS &&
    page <= totalPages
  ) {
    const nextPageUrl = baseUrl.replace(`page=${currentPage}`, `page=${page}`);
    const nextResponse = await fetch(nextPageUrl, {
      ...API_GET_options,
      signal,
    });

    const nextData: ApiResponseType = await nextResponse.json();
    const nextResult: MovieModel[] = nextData.results.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()),
    );

    additionalResults.push(...nextResult);
    page++;
  }

  return additionalResults;
};
