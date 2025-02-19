import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterProp } from "../interfaces/FilterProp";

type setFilters = {
  execute: (arg: FilterProp) => void;
};

export const useMovieFilters = (): FilterProp & setFilters => {
  const [searchParams, setSearchParams] = useSearchParams();
  const experimental = searchParams.has(
    "experimental",
  ) as FilterProp["experimental"];
  const search = searchParams.get("q") as FilterProp["search"];
  const filterValue = searchParams.get("genres") as FilterProp["filterValue"];
  const sorting = searchParams.get("sort") as FilterProp["sorting"];
  const sortDesc = searchParams.get("by") as FilterProp["sortDesc"];

  const setFilters = useCallback((filters: FilterProp) => {
    setSearchParams(
      (prev) => {
        if (filters.search) {
          prev.set("q", filters.search);
        } else {
          prev.delete("q");
        }

        if (filters.experimental) {
          prev.set("experimental", "true");
        } else {
          prev.delete("experimental");
        }

        if (filters.filterValue) {
          prev.set("genres", String(filters.filterValue));
        } else {
          prev.delete("genres");
        }

        if (filters.sorting) {
          prev.set("sort", filters.sorting);
        } else {
          prev.delete("sort");
        }

        if (filters.sorting && filters.sortDesc) {
          prev.set("by", filters.sortDesc);
        } else {
          prev.delete("by");
        }

        return prev;
      },
      { replace: true },
    );
  }, []);

  return {
    search,
    sorting,
    sortDesc,
    filterValue,
    experimental,
    execute: setFilters,
  };
};
