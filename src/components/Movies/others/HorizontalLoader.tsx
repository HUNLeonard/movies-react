import { MAXMOVIELISTSHOW } from "../../../utils/constants";
import HorizontalSkeleton from "../Cards/HorizontalSkeleton";

const HorizontalLoader = ({
  children,
  isLoading = true,
  skeletonImageClassName = "",
  skeletonClassName = "",
  maxShowCount = MAXMOVIELISTSHOW
}: {
  children: React.ReactNode[];
  isLoading?: boolean;
  skeletonImageClassName?: string;
  skeletonClassName?: string;
  maxShowCount?: number;
}) => {
  return (
    <div className="grid gap-4 [grid-auto-rows:1fr] overflow-y-auto">
      {isLoading ? (
        <>
          {[0, ...Array(maxShowCount)].map((_movie, index) => (
            <HorizontalSkeleton
              key={index}
              className={skeletonClassName}
              imageClassName={skeletonImageClassName}
            />
          ))}
        </>
      ) : (
        <>
          {children}
        </>
      )}
    </div>
  );
};

export default HorizontalLoader;
