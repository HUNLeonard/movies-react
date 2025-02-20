import React from 'react'
import { cn } from '../../utils/cn';

type SubmitButton = {
  children?: React.ReactNode;
  className?: string,

}

const SubmitButton = ({ children, className = "" }: SubmitButton) => {
  return (
    <button type='submit'
      className={cn("px-4 py-2 bg-secondary-300 text-primary border-2 border-black",
        "rounded-lg font-bold text-lg cursor-pointer",
        "hover:bg-secondary-100 hover:text-primary-200",
        "transition-[background-color,color] duration-200 focus-visible:outline-2"
        , className)}
    >
      {children}
    </button>
  )
}

export default SubmitButton