import {
  GetMovieParams,
  PaginationResult,
  ApiResponseType,
} from "../../interfaces/serviceMovieParams";
// import { fetchAdditionalResults } from "../../utils/apiHelpers/fetchAdditionalResults";
import { buildApiUrl } from "../../utils/apiHelpers/buildApiUrl";
import { API_GET_options } from "../../utils/constants";

export const getMovies = async (
  params: GetMovieParams,
  signal?: AbortSignal,
): Promise<PaginationResult> => {
  try {
    const url = buildApiUrl(params);
    const response = await fetch(url, {
      ...API_GET_options,
      signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponseType = await response.json();
    let results = [...data.results];

    // Handle experimental search mode

    // Problem is htat the TMDB does not support directly title and filter + sort :/
    // I could theoratically write 1. check if are there any movies with the serached name

    // THEN if yes, I have two route, wich I wrote in this example 1. [this took too long (': ]
    // Regular sort and filter then filter out of no include in title
    // 2. get all the title movies, and sort and filter in them, but that would need ALL the movies
    // So 1 is better, but IDK, seems kinda janky so I am not gonna implement it in REAL

    // [This works btw just forget to check if any existing out there, so that and we gold]

    // if (params.experimental && params.search) {
    //   results = results.filter((movie) =>
    //     movie.title.toLowerCase().includes(params.search!.toLowerCase()),
    //   );

    //   if (results.length < MAXRESULTS && data.page < data.total_pages) {
    //     const additionalResults = await fetchAdditionalResults(
    //       url,
    //       params.search,
    //       results.length,
    //       data.page,
    //       data.total_pages,
    //       signal!,
    //     );
    //     results.push(...additionalResults);
    //   }
    // }

    return {
      movies: results,
      currentPage: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
      hasNextPage: data.page < data.total_pages,
      hasPreviousPage: data.page > 1,
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
