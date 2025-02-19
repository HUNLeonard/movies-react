import { cn } from "../../../utils/cn";
import Img from "../../common/Img";

const HorizontalSkeleton = ({
  className = "",
  alt = "Loading",
  imageClassName = "",
}: {
  className?: string,
  alt?: string,
  imageClassName?: string,
}) => {
  return (
    <div className={cn("w-full h-fit gap-2 flex flex-row animate-pulse", className)}
      style={{ animationDelay: Math.random() + "s" }} >
      <div
        className={cn(
          "shrink-0 aspect-[12/16]",
          "rounded-xl lg:rounded-lg overflow-hidden flex items-center",
          imageClassName,
        )}
      >
        <Img
          src={`../Gray.webp`}
          alt={alt}
        />
      </div>
      {/* Movie Details */}
      <div className="flex flex-col gap-2 justify-between w-full">
        <div
          className="w-full bg-neutral-500 rounded-2"
        >
        </div>
        <p className={"w-[91%] h-24 bg-neutral-500 rounded-xl"}></p>
        <p className={"w-[55%] h-12 bg-neutral-500 rounded-xl"}></p>
      </div>
    </div>
  );
};

export default HorizontalSkeleton;
