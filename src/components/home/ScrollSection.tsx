import { useRef } from "react";
import ScrollButton from "../common/ScrollButton";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import ScrollImage from "./ScrollImage";
import { MovieModel } from "../../interfaces/MovieModel";
import { useScrollHorizontal } from "../../hooks/useScroll";
import { cn } from "../../utils/cn";

const ScrollSection = ({
  movies,
  className = "",
  aspectRatio = "max-lg:aspect-[16/12]",
}: {
  movies: MovieModel[];
  className?: string;
  aspectRatio?: string;
}) => {
  const scrollContainer = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={cn(
        "relative shadow-lg mx-auto w-fit rounded-lg lg:rounded-2xl overflow-hidden",
        "bg-black-100 border-primary border-4",
        className,
      )}
    >
      <div
        ref={scrollContainer}
        className={cn(
          "h-full flex gap-5 scroll-smooth",
          "overflow-auto snap-mandatory snap-x no-scrollbar",
          aspectRatio,
        )}
      >
        {movies.map((movie) => (
          <ScrollImage
            key={movie.title}
            src={`${movie.backdrop_path ?? movie.poster_path}`}
            name={movie.title}
            link={String(movie.id)}
          />
        ))}
      </div>
      <ScrollButton
        icon={ArrowBigLeft}
        position={"left-2"}
        execute={() => useScrollHorizontal(true, scrollContainer.current)}
      />
      <ScrollButton
        icon={ArrowBigRight}
        position={"right-2"}
        execute={() => useScrollHorizontal(false, scrollContainer.current)}
      />
    </div>
  );
};

export default ScrollSection;
