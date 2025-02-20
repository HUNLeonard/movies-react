import { MovieModel } from "../../../interfaces/MovieModel";
import BubbleText from "../../common/BubbleText";
import { Star } from "lucide-react";
import { cn } from "../../../utils/cn";

import Img from "../../common/Img";

import { dateFormatter } from "../../../utils/dateFormatter";

const MovieCard = ({
  movie,
  className = "",
}: {
  movie: MovieModel;
  className?: string;
}) => {

  return (
    <div className={cn("relative h-auto flex flex-col pb-4", className)}>
      {/* Movie Image */}
      <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank"
        className="w-full aspect-[3/4] md:aspect-[4/6] overflow-hidden flex items-center justify-center rounded-t-xl lg:rounded-t-lg [box-shadow:5px_10px_15px_0px_rgba(0,0,0,0.5)]"
      >
        <Img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
      </a>

      {/* Movie Details */}
      <div className="absolute top-0 left-0 w-full flex flex-col gap-2 px-2 py-2 font-medium justify-between flex-1">
        <div className="flex flex-row font-medium justify-between">
          <BubbleText
            type="secondary"
            title={`Released in ${movie.release_date}`}
            truncate={false}
            className={"!cursor-default"}
          >
            {dateFormatter(movie.release_date)}
          </BubbleText>

          <BubbleText
            type="secondary"
            title={movie.vote_average.toFixed(1) + " stars rating"}
            truncate={false}
            className={"!cursor-default"}
          >
            <span className="flex items-center">
              {(movie.vote_average.toFixed(1))}&nbsp;
              <span className="inline-block">
                <Star
                  size={12}
                  className="text-secondary-300 fill-secondary-300"
                />
              </span>
            </span>
          </BubbleText>
        </div>
      </div>

      {/* Movie Title */}
      <div className={"px-4 py-2 bg-primary-100 rounded-b-lg [box-shadow:5px_0px_20px_-2px_rgba(0,0,0,0.5)]"}>
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank"
          className={cn("text-base xs:text-lg md:text-xl font-semibold  hover:scale-101 hover:font-bold",
            "text-black text-ellipsis line-clamp-2 transition-[scale,font-weight] duration-200")}
          title={movie.title}
        >
          {movie.title}
        </a>
      </div>
    </div>


  );
};

export default MovieCard;
