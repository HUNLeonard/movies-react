import { MovieModel } from "../../interfaces/MovieModel";
import { useRef } from "react";
import ScrollButton from "../common/ScrollButton";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { useScrollVertical } from "../../hooks/useScroll";
import H3 from "../common/H3";
import { cn } from "../../utils/cn";

import HorizontalCard from "../Movies/Cards/HorizontalCard";
import HorizontalLoader from "../Movies/others/HorizontalLoader";

const HorizontalSection = ({
  title,
  movies,
  className = "",
  isLoading = true,
  isError = true,
}: {
  title: string;
  movies: MovieModel[];
  className?: string;
  isLoading?: boolean;
  isError?: boolean;
}) => {
  const scrollContainer = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative max-lg:hidden flex-1 border-secondary-300 border-4 rounded-2xl shadow-lg overflow-hidden aspect-[16/9]">
      <div
        ref={scrollContainer}
        className={cn(
          "relative w-full h-full bg-primary  mx-auto *:py-4 *:px-6",
          "overflow-auto shadow-xl no-scrollbar scroll-smooth",
          className,
        )}
      >
        {/* Title */}
        <div className="sticky top-0 left-0 right-0 bg-primary z-10">
          <H3 className="">{title}</H3>
        </div>

        {/* Cards */}
        {isError ? (
          <div className="">
            <p className="text-2xl text-secondary font-bold text-center">
              Something went wrong... <br />
              Please try reloading the page.
            </p>
          </div>
        ) : (
          <HorizontalLoader isLoading={isLoading} skeletonImageClassName="w-24">
            {movies.map((movie) => (
              <HorizontalCard
                key={movie.id}
                movie={movie}
                imageClassName="w-24"
              />
            ))}
          </HorizontalLoader>
        )}
      </div>
      {!isError &&
        <>
          <ScrollButton
            icon={ArrowBigUp}
            position={"right-2 top-[calc(50%-32px)]"}
            execute={() => useScrollVertical(true, scrollContainer.current)}
          />
          <ScrollButton
            icon={ArrowBigDown}
            position={"right-2 top-[calc(50%+32px)]"}
            execute={() => useScrollVertical(false, scrollContainer.current)}
          />
        </>
      }
    </div>
  );
};

export default HorizontalSection;
