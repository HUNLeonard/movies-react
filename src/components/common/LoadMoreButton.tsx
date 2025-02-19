import React from 'react'
import { cn } from '../../utils/cn'

type LoadMoreButtonProp = {
  children: React.ReactNode,
  className?: string,
  disabled?: boolean,
  execute?: () => void;
}

const LoadMoreButton = ({ children, className = "", disabled = false, execute }: LoadMoreButtonProp) => {
  return (
    <button
      className={cn("relative px-3 py-2 cursor-pointer text-xl bg-secondary-200 hover:bg-secondary-100",
        " text-black font-bold rounded-2xl transition-[background-color] duration-200",
        "disabled:bg-gray-700 disabled:cursor-not-allowed group pr-6",
        "",
        className)}
      onClick={execute}
      disabled={disabled}
    >
      {children}
      &nbsp;
      <span className={("absolute right-3  group-not-disabled:group-hover:text-primary group-not-disabled:group-hover:rotate-360 [transition:rotate_0.6s,color_0.6s]")}>v</span>
    </button>
  )
}

export default LoadMoreButton