import { cn } from "../../utils/cn";
import FancyBorder from "./FancyBorder";

interface HeroProp {
  children?: React.ReactNode;
  bg?: string;
  className?: string;
}

const Hero = ({ children, bg = "", className = "" }: HeroProp) => {
  return (
    <section
      className={cn(
        "min-h-64 xs:min-h-72 md:min-h-86 flex justify-center items-center",
        "bg-primary-200 text-center px-4 md:px-8 text-pretty relative mb-16",
        "bg-[url('../about-wide.webp')] bg-no-repeat bg-cover",
        className,
      )}
    >
      <FancyBorder bg={bg} className="scale-y-50 -translate-y-1/4 top-0 left-0 drop-shadow-lg" />
      <FancyBorder bg={bg} className="scale-y-50 translate-y-1/4 bottom-0 left-0 rotate-180 drop-shadow-lg" />
      <FancyBorder bg={bg} className="scale-y-50 -translate-y-1/4 top-[calc(100%-0.25rem)] left-0 drop-shadow-xl" />

      <p className={cn("w-fit text-transparent",
        "text-4xl xs:text-5xl md:text-6xl font-extrabold",
        "bg-clip-text bg-linear-120 from-secondary-200 to-secondary-100",
        "max-w-[max(50%,72rem)] my-8 drop-shadow-[1px_1px_0px_black]")}>{children}</p>

    </section>
  );
};

export default Hero;
