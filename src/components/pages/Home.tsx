import TopMovies from "../home/TopMovies"
import MovieList from "../Movies/others/MovieList";
import { findGenreId } from "../../utils/findGenreId";
import { cn } from "../../utils/cn";

const Home = () => {
  return (
    <main className={cn("pb-16 min-h-screen *:mx-auto *:max-w-[90rem]",
      "space-y-8 bg-[url('../yellow-200-bg.svg')] bg-repeat-y bg-cover")}>
      <section className={cn("min-w-screen *:mx-auto *:max-w-[90rem]",
        "pt-16 sm:pb-2 md:pt-16 lg:pb-12 lg:pt-24",
        "bg-[url('../moviebg1.webp')] bg-no-repeat bg-cover",
        "[box-shadow:0_0_20px_0_rgba(0,0,0,1)] bg-[#d28c69]"
      )}>
        <TopMovies />
      </section>

      <MovieList title="Action Movies" filterBy="genres" filterValue={findGenreId("action")} />
      <MovieList title="Crime Movies" filterBy="genres" filterValue={findGenreId("crime")} />
      <MovieList title="Mystery Movies" filterBy="genres" filterValue={findGenreId("Mystery")} />

    </main>
  )
}

export default Home