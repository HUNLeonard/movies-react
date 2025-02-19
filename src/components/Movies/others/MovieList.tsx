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
      <H2 className="mb-8">{title}</H2>
      <div className="relative">
        <div
          ref={scrollContainer}
          className="relative max-w-full overflow-auto no-scrollbar scroll-smooth"
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
