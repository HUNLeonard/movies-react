import { cn } from "../../utils/cn";

const BubbleText = ({
  children,
  className = "",
  title,
  type = "primary",
  truncate = false
}: {
  children: string | React.ReactNode;
  type?: "primary" | "secondary";
  title?: string;
  className?: string;
  truncate?: boolean
}) => {


  return (
    <p
      className={cn("px-3 py-2 ",
        type === "primary" ? "bg-black-300 hover:bg-black-100" : "bg-black-200 hover:bg-black-100",
        "text-white rounded-4xl w-fit max-w-30",
        truncate ? "truncate" : "",
        "transition-all duration-200 shadow-md whitespace-nowrap",
        "text-sm xs:text-base md:text-lg cursor-default", className)}
      title={title ?? ''}
    >
      {children}
    </p>
  );
};

export default BubbleText;
