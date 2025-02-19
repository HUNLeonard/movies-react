import React from 'react'

const H3 = ({ children, className }: { children: React.ReactNode | string, className?: string }) => {
  return (
    <h3 className={`text-secondary-200 text-3xl xl:text-4xl font-bold ${className}`}>
      {children}
    </h3>
  )
}

export default H3