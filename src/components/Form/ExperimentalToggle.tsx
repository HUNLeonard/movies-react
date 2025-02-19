import { useState } from "react";
import { cn } from "../../utils/cn";

const ExperimentalToggle = ({ checked, onChange, disabled }: {
  disabled: boolean;
  checked: boolean;
  onChange: () => void;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div aria-hidden
      className={cn("relative flex flex-row items-center gap-2 mx-auto",
        "transition-[height,scale,opacity] duration-1000",
        disabled ? "h-0 -mt-2 p-0 scale-y-0 opacity-0 blur-md" : "h-10",
      )}
    >
      <p
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onTouchStart={() => setIsHover(true)}
        className="text-xl text-black font-bold w-fit"

      >
        Experimental
      </p>
      <input
        type="checkbox"
        name="experimental"
        className="w-5 h-5 bg-white border-2 border-black cursor-pointer"
        checked={checked}
        onChange={onChange}
      />
      {isHover && (
        <div className="absolute top-5/6 left-1/2 -translate-x-1/2 px-2 py-1 rounded-2xl bg-neutral-500/98 z-50 text-pretty w-[200%]">
          <span className="text-sm w-fit text-pretty">
            Enables sort,filter AND title search.<br />
            Altough, this maybe will take a little longer 🐌 then excpected, because the backend does not support it directly.
          </span>
        </div>
      )}
    </div>
  );
};

export default ExperimentalToggle;