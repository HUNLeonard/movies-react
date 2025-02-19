import React from 'react'

const H2 = ({ children, className }: { children: React.ReactNode | string, className?: string }) => {
  return (
    <h2 className={`text-transparent bg-linear-120 from-primary to-primary-100 
    w-fit bg-clip-text text-4xl xs:text-5xl xl:text-6xl font-bold xl:leading-18 ${className}`}>
      {children}
    </h2>
  )
}

export default H2