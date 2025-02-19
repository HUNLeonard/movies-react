
import { useMovies } from '../../../hooks/useMovies';
import { cn } from '../../../utils/cn';
import { FilterProp } from '../../../interfaces/FilterProp';
import { MAXMOVIELISTSHOW } from '../../../utils/constants';
import MovieCard from '../Cards/MovieCard';
import MovieSkeleton from '../Cards/MovieSkeleton';

const MovieCardLoader = ({ params }: { params: FilterProp }) => {

  const { data, isLoading, error } = useMovies({ ...params });
  const movies = [...data?.movies ?? []]
  return (
    <>
      {error
        ? <div className='h-80 xs:grid xs:place-content-center min-w-screen'>
          <p className="text-red-600 text-2xl xs:text-3xl font-bold text-center">Something went wrong...<br />
            Try reloading the page.
          </p>
        </div>
        :
        <>
          {isLoading
            ?
            <>
              {
                [0, ...Array(MAXMOVIELISTSHOW)].map((_value, index) => {
                  return (
                    <MovieSkeleton
                      key={`Loading-${index}`}
                      className={cn("w-54 xs:w-64"
                      )}
                    />)
                })
              }
            </>
            :
            <>
              {movies.slice(0, MAXMOVIELISTSHOW).map((movie) => (
                <MovieCard
                  key={movie.title}
                  movie={movie}
                  className="w-54 xs:w-64 flex-1"
                />
              ))}
            </>
          }
        </>
      }
    </>
  )
}

export default MovieCardLoader