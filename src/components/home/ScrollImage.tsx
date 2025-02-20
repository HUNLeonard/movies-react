import { cn } from "../../utils/cn";
import Img from "../common/Img";

const MovieScrollImage = ({
  src,
  name,
  link,
}: {
  src: string;
  name: string;
  link: string;
}) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${link}`}
      target="_blank"
      className="relative flex min-w-full h-full"
    >
      <Img
        src={`https://image.tmdb.org/t/p/w1280/` + src}
        alt={name}
        className="min-w-full [scroll-snap-align:center;]"
      />
      <div className={cn("absolute left-0 bottom-0 w-fit bg-white",
        "px-6 py-4 text-2xl md:text-4xl font-bold text-ellipsis line-clamp-2 rounded-t-lg",
        "")}
        title={name}>
        {name}
      </div>
    </a>
  );
};

export default MovieScrollImage;
