import { cn } from '../../../utils/cn'
import Img from '../../common/Img'

interface SkeletonProp {
  alt?: string,
  className?: string,
}

const MovieSkeleton = ({ className = "", alt = "Loading..." }: SkeletonProp) => {
  return (
    <div className={cn("relative h-auto flex flex-col gap-2 rounded-xl lg:rounded-lg",
      "overflow-hidden animate-pulse",
      className)}
      style={{ animationDelay: Math.random() + "s" }}

    >
      {/* Movie Image */}
      <div
        className="w-full aspect-[3/4] md:aspect-[4/6] overflow-hidden flex items-center justify-center"
      >
        <Img
          src={`../Gray.webp`}
          alt={alt}
        />
      </div>
      {/* Movie Title */}
      <div className={"px-4 py-2 bg-neutral-400 rounded-b-lg shadow-lg h-1/7"}>
        <div
          className={cn("text-base xs:text-lg md:text-xl font-semibold  hover:scale-101 hover:font-bold",
            "text-black text-ellipsis line-clamp-2 transition-[scale,font-weight] duration-200")}
          title={"loading"}
        >

        </div>
      </div>
    </div>
  )
}

export default MovieSkeleton