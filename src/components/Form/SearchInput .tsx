import { SearchIcon } from "lucide-react";
import { cn } from "../../utils/cn";

const SearchInput = ({ value, disabled, onChange }: {
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}) => (
  <div className="relative w-full">
    <input
      type="text"
      name="q"
      className={cn(
        "bg-white border-2 border-black rounded-lg px-4 py-2 w-full h-full",
        "text-xl overflow-hidden outline-0 text-primary font-medium",
        "disabled:bg-neutral-500 disabled:text-gray-200 disabled:cursor-not-allowed",
        "disabled:opacity-50 transition-all duration-200"
      )}
      placeholder="Movie name..."
      spellCheck={false}
      value={value}
      disabled={disabled}
      title={disabled ? "Search is disabled.\nTurn off Genres + Sort to search in titles.\nDue to backend limitations." : "Search in movie titles."}
      onChange={(e) => onChange(e.target.value)}
    />
    <button
      disabled={disabled}
      type="submit"
      className={cn("cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-50 w-fit",
        "h-10 px-2 rounded-lg focus-visible:outline-1",
        "disabled:opacity-60 transition-all duration-200")}
    >
      <SearchIcon size={28} className="hover:scale-105 transition-[scale]" />
    </button>
  </div>
);
export default SearchInput