import { MovieModel } from "../../../interfaces/MovieModel";
import { dateFormatter } from "../../../utils/dateFormatter";
import { Star } from "lucide-react";
import Img from "../../common/Img";
import { cn } from "../../../utils/cn";
import BubbleText from "../../common/BubbleText";


const HorizontalCard = ({
  movie,
  className = "",
  imageClassName = "",
  overViewClassName = "",
  imgSize = "w92",
}: {
  movie: MovieModel;
  className?: string;
  imageClassName?: string;
  overViewClassName?: string;
  imgSize?: "w92" | "w342"
}) => {


  return (
    <div className={cn("w-full h-fit gap-2 flex flex-row", className)}>
      {/* Movie Image */}
      <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank"
        className={cn(
          "shrink-0 aspect-[12/16] [box-shadow:2px_5px_10px_-6px]",
          "rounded-xl lg:rounded-lg overflow-hidden flex items-center",
          imageClassName
        )}
      >
        <Img
          src={`https://image.tmdb.org/t/p/${imgSize}${movie.poster_path}`}
          alt={movie.title}
        />
      </a>

      {/* Movie Details */}
      <div className="flex flex-col gap-2 justify-between">
        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank"
          className="text-xl xl:text-2xl font-bold transition-[scale,translate]
         hover:scale-102  text-secondary-200 hover:text-secondary-300
        bg-local w-fit text-ellipsis line-clamp-1 number"
          title={movie.title}
        >
          {movie.title}
        </a>

        {/* Movie Details */}
        <p className={cn("text-ellipsis text-sm xl:text-base text-white-100 line-clamp-2", overViewClassName)}
          title={movie.overview}
          aria-label="movie overview text"
        >
          {movie.overview}
        </p>

        {/* Movie othes */}
        <div className="flex flex-row gap-4 font-bold">
          <BubbleText
            title={"Released in " + movie.release_date}
          >
            <span>{dateFormatter(movie.release_date)}</span>
          </BubbleText>

          <BubbleText className="flex items-center"
            title={movie.vote_average.toFixed(1) + " stars rating"}
          >
            {movie.vote_average.toFixed(1)}&nbsp;
            <span className="inline-block">
              <Star
                size={12}
                className="text-secondary-300 fill-secondary-300"
              />
            </span>
          </BubbleText>
        </div>
      </div>
    </div>
  );
};


export default HorizontalCard;
