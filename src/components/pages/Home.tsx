import TopMovies from "../home/TopMovies"
import MovieList from "../Movies/others/MovieList";
import { findGenreId } from "../../utils/findGenreId";

const Home = () => {
  return (
    <main className="py-16 lg:pt-24 min-h-screen mx-auto max-w-[90rem] space-y-16">
      <TopMovies />

      <MovieList title="Action Movies" filterBy="genres" filterValue={findGenreId("action")} />
      <MovieList title="Crime Movies" filterBy="genres" filterValue={findGenreId("crime")} />
      <MovieList title="Mystery Movies" filterBy="genres" filterValue={findGenreId("Mystery")} />

    </main>
  )
}

export default Home