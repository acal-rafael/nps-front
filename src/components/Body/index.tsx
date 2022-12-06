import React from 'react'

interface IBodyProps {
  children: React.ReactNode;
}

export const Body = ({ children }: IBodyProps ) => {

  return <div>
    { children }
  </div>
}
