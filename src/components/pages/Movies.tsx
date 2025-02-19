import { useMovieFilters } from "../../hooks/useMovieFilters";
import SearchForm from "../Movies/others/SearchForm";
import { FilterProp } from "../../interfaces/FilterProp";
import { findGenreId } from "../../utils/findGenreId";
import { useMovies } from "../../hooks/useMovies";
import PageButton from "../common/PageButton";
import { useCallback, useEffect, useRef, useState } from "react";
import { MovieModel } from "../../interfaces/MovieModel";
import HorizontalCard from "../Movies/Cards/HorizontalCard";
import { objectSameUnion } from "../../utils/objectSameUnion";

import LoadMoreButton from "../common/LoadMoreButton";
import HorizontalLoader from "../Movies/others/HorizontalLoader";
import AnimatedLoading from "../common/AnimatedLoading";

const Movies = () => {
  const { execute: setFilters, ...searchParams } = useMovieFilters();
  const [page, setPage] = useState(1);
  const [loadedMovies, setLoadedMovies] = useState<MovieModel[]>([]);
  const searchParamRef = useRef<FilterProp>(searchParams);

  const { data, isLoading, isError } = useMovies({
    page,
    search: searchParams.search,
    sorting: searchParams.sorting,
    sortDesc: searchParams.sortDesc,
    filterBy: "genres",
    experimental: searchParams.experimental,
    filterValue: searchParams.filterValue
      ? findGenreId(String(searchParams.filterValue))
      : "",
  });

  useEffect(() => {
    if (objectSameUnion<FilterProp>(searchParams, searchParamRef.current)) {
      setLoadedMovies((prev) => {
        const newMovies = data?.movies.filter(
          (newMovie) => !prev.some((prevMovie) => prevMovie.id === newMovie.id),
        );
        return [...prev, ...(newMovies ?? [])];
      });
    } else {
      searchParamRef.current = searchParams;
      setLoadedMovies([...(data?.movies ?? [])]);
    }
  }, [data?.movies]);

  const handleFilter = useCallback((arg: FilterProp) => {
    if (objectSameUnion<FilterProp>(searchParams, searchParamRef.current)) {
      setPage(1);
    }

    setFilters(arg);
  }, []);

  const handleAddMore = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  return (
    <main className="flex flex-col lg:flex-row max-w-[90rem] mx-auto mt-16 min-h-screen px-2 py-8 lg:px-8 gap-4 scroll-smooth">

      <PageButton />
      <PageButton down={true} />
      <aside className="w-full lg:w-2/5 h-fit lg:sticky top-18">
        <SearchForm execute={handleFilter} />
      </aside>

      <section className="w-full bg-primary border-4 rounded-xl border-secondary-200">
        <HorizontalLoader
          /* Only need to load the skeletons, when the list is empty. 
          * Otherwise, if use "isLoading", every time I fetch, all of the prev data would turn 
          * to skeleton wich is not wanted outcome.
          */
          isLoading={loadedMovies.length === 0}
          skeletonClassName="w-full rounded-xl p-4"
          skeletonImageClassName="min-w-24 xs:min-w-32 w-full max-w-1/8"
          maxShowCount={20}
        >
          {loadedMovies.map((movie) => (
            <div key={`${movie.id}`}>
              <HorizontalCard
                movie={movie}
                className="w-full rounded-xl p-4"
                imageClassName="min-w-24 xs:min-w-32 w-full max-w-1/8"
                overViewClassName="!line-clamp-4"
                imgSize="w342"
              />
              <hr className="w-[95%] mx-auto border-secondary-200/50" />
            </div>
          ))}
        </HorizontalLoader>

        <div className="w-fit m-6">
          <LoadMoreButton
            execute={handleAddMore}
            disabled={!data?.hasNextPage || isLoading}
          >
            {isError ? "Something went wrong :/" : !data?.hasNextPage || isLoading ? <AnimatedLoading /> : "More"}
          </LoadMoreButton>
        </div>
      </section>
    </main>
  );
};

export default Movies;
