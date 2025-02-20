import { useEffect, useMemo, useState } from "react";
import Select from "../../Form/Select";
import { FilterProp } from "../../../interfaces/FilterProp";
import { genres } from "../../../interfaces/MovieGenres";
import { sortValues } from "../../../interfaces/SortProp";
import { useMovieFilters } from "../../../hooks/useMovieFilters";
import SearchInput from "../../Form/SearchInput ";
// import ExperimentalToggle from "../Form/ExperimentalToggle";
import SubmitButton from "../../Form/SubmitButton";
import { cn } from "../../../utils/cn";

import H3 from "../../common/H3";
import SpanSpin from "../../common/SpanSpin";
import { firstLetterUC } from "../../../utils/firstLetterUC";


type SearchFormProps = {
  execute: (searchParams: FilterProp) => void;
};


const SearchForm = ({ execute }: SearchFormProps) => {
  const { search, filterValue, sorting, sortDesc } = useMovieFilters();
  // const [isExperimental, setIsExperimental] = useState(false);

  const initialSearchParams = useMemo(() => ({
    search: search ?? "",
    filterBy: "genres",
    filterValue: filterValue ?? "",
    sorting: sorting ?? "",
    sortDesc: sortDesc ?? "desc",
  }), [search, filterValue, sorting, sortDesc]);

  const [searchParams, setSearchParams] = useState<FilterProp>(initialSearchParams);

  useEffect(() => {
    setSearchParams(initialSearchParams);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const shouldClearSearch = Boolean(searchParams.filterValue || searchParams.sorting) /*&& !isExperimental;*/

    execute({
      ...searchParams,
      search: shouldClearSearch ? "" : searchParams.search,
      // experimental: isExperimental
    });
  };

  const updateSearchParams = (field: keyof FilterProp) => (value: string) => {
    setSearchParams(prev => ({ ...prev, [field]: value }));
  };

  const isSearchDisabled = Boolean(searchParams.filterValue || searchParams.sorting) /*&& !isExperimental;*/
  const searchFormText = "Search Form".split("");
  return (
    <form onSubmit={handleSubmit}
      className={cn("flex flex-col justify-center flex-wrap gap-2 rounded-xl shadow-md",
        "max-w-2xl mx-auto bg-primary backdrop-blur-md p-6 border-4 border-secondary-200")}>
      <H3 className={cn("relative !text-secondary-200 mb-4 spinString w-fit",
        "before:w-0 before:absolute before:-bottom-1 before:left-1/2 before:h-1 before:bg-secondary-200",
        "before:-translate-x-1/2 hover:before:w-full before:transition-[width] before:duration-500"
      )}>
        {searchFormText.map((char: string, index) =>
          <SpanSpin pos={index} key={index}>{char}</SpanSpin>
        )}
      </H3>
      <SearchInput
        value={searchParams.search ?? ""}
        disabled={isSearchDisabled}
        onChange={updateSearchParams('search')}
      />

      <Select
        name="genres"
        value={searchParams.filterValue}
        onChange={(e) => updateSearchParams('filterValue')(e.target.value)}
        placeholder="Genres"
        className={searchParams.filterValue === "" ? "!text-black !bg-gray-300" : ""}
      >
        {Object.entries(genres).map(([name, id]) => (
          <option
            key={id}
            value={name.toLowerCase()}
            className="bg-primary-100 font-medium text-secondary-200"
          >
            {name}
          </option>
        ))}
      </Select>

      <Select
        name="sort"
        value={searchParams.sorting}
        onChange={(e) => updateSearchParams('sorting')(e.target.value)}
        placeholder="Sort by"
        className={searchParams.sorting === "" ? "!text-black !font-extrabold !bg-gray-300" : ""}
      >
        {sortValues.map((name) => (
          <option
            key={name}
            value={name}
            className="bg-primary-100 font-medium text-secondary-200"
          >
            {firstLetterUC(name.replace(/_/g, " "))}
          </option>
        ))}
      </Select>

      <Select
        name="by"
        value={searchParams.sortDesc}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          updateSearchParams('sortDesc')(e.target.value ?? "desc")
        }
        placeholder="Order By"
        className={!searchParams.sortDesc ? "!text-black !font-extrabold !bg-gray-300" : ""}
      >
        <option value="desc" className="bg-primary-100 font-medium text-secondary-200">
          Desc
        </option>
        <option value="asc" className="bg-primary-100 font-medium text-secondary-200">
          Asc
        </option>
      </Select>

      {/* No longer want to implement it, too janky
      <ExperimentalToggle
        checked={isExperimental}
        disabled={!isSearchDisabled}
        onChange={() => setIsExperimental(prev => !prev)}
      /> */}
      <SubmitButton className="w-full max-w-64 mx-auto">Search</SubmitButton>
    </form>
  );
};

export default SearchForm;