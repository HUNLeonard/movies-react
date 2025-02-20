import React from "react";
import { cn } from "../../utils/cn";

interface SelectProp {
  children: React.ReactNode;
  name: string;
  placeholder?: string;
  defaultOption?: boolean;
  className?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: (arg: React.ChangeEvent<HTMLSelectElement>) => void;
  ref?: React.Ref<HTMLSelectElement> | undefined;
  defaltValue?: string;
}

const Select = ({
  children,
  name,
  defaultOption = true,
  placeholder,
  className = "",
  value,
  onChange,
  defaltValue,
  ref: refValue,
}: SelectProp) => {
  return (
    <select
      name={name}
      className={cn(
        "px-4 py-2 text-lg overflow-hidden outline-0 text-primary font-extrabold",
        "bg-secondary-200 border-2 border-black rounded-md transition-[background-color] duration-200",
        "hover:bg-secondary-100 *:checked:bg-secondary-100 *:checked:!text-primary *:checked:font-bold",
        "focus-visible:outline-2",
        className,
      )}
      value={value}
      onChange={onChange}
      ref={refValue}
      defaultValue={defaltValue}
    >
      {defaultOption && <option value="" className="!text-black !font-extrabold bg-secondary-300">{placeholder}</option>}
      {children}
    </select>
  );
};

export default Select;
