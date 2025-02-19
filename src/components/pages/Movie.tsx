import { useParams } from 'react-router-dom'
import { useMovieById } from '../../hooks/useMovieById';

const Movie = () => {
  const params = useParams();
  const movieId = params.movieId;

  const { movie, isLoading, error } = useMovieById(Number(movieId));

  return (
    <main className='min-h-screen max-w-[90rem] mx-auto mt-16'>
      {!error ?
        <section>
          {(!isLoading && movie)
            ? <div>{movie.title}</div>
            : <div>Loading..</div>}
        </section>
        :
        <p className='text-5xl text-red-500 font-extrabold'>Movie with this id does not exists</p>
      }
    </main>
  )
}

export default Movie