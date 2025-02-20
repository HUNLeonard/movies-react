import { useRef } from "react";
import { useScrollHorizontal } from "../../../hooks/useScroll";
import H2 from "../../common/H2";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import ScrollButton from "../../common/ScrollButton";
import { FilterProp } from "../../../interfaces/FilterProp";
import MovieCardLoader from "./MovieCardLoader";


const MovieList = ({
  filterBy = "",
  filterValue = "",
  sorting = "popularity",
  sortDesc = "desc",
  title = "Title",
}: FilterProp & { title: string }) => {
  const scrollContainer = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative px-2 lg:px-6">

      {/* text-shadow: 3px 3px 6px white;
    color: var(--color-primary); */}
      {/* text-primary [text-shadow:_3px_3px_6px_rgba(255,255,255,1)] */}
      <div className="w-fit mb-8 bg-white/50 backdrop-blur-lg px-4 py-1 xs:px-6 xs:py-1.5 rounded-2xl shadow-md">
        <H2>{title}</H2>
      </div>
      <div className="relative">
        <div
          ref={scrollContainer}
          className="relative max-w-full overflow-x-auto !overflow-y-visible no-scrollbar scroll-smooth"
        >
          <div className="w-fit flex gap-5 ">
            <MovieCardLoader params={{ filterBy, filterValue, sorting, sortDesc } as FilterProp} />
          </div>

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
    </section>
  );
};

export default MovieList;
