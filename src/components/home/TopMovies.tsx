import HorizontalSection from "./HorizontalSection"
import ScrollSection from "./ScrollSection"
import { useMovies } from "../../hooks/useMovies"
import { MAXMOVIELISTSHOW } from "../../utils/constants";

const TopMovies = () => {
  const { data, isLoading, isError } = useMovies({ page: 1, popular: true });
  const movies = data?.movies ?? [];

  return (
    <div className='relative md:px-2 lg:px-6 flex flex-row justify-center gap-4 sm:mt-2'>
      <ScrollSection movies={movies.slice(0, MAXMOVIELISTSHOW)} className={"lg:w-3/5 xl:w-2/3 max-lg:w-full lg:h-112 xl:h-128 max-w-[clamp(300px,100vw,800px)]"} />
      <HorizontalSection title={"Popular Movies"} movies={movies.slice(0, MAXMOVIELISTSHOW)} isLoading={isLoading} isError={isError} className={"lg:h-112 xl:h-128"} />
    </div>
  )
}

export default TopMovies