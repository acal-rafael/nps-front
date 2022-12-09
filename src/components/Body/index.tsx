import React from 'react';
import Lottie from 'react-lottie';

import { Footer } from '../Footer';
import { Header } from '../Header';

interface IBodyProps {
  children: React.ReactNode;
}

export const Body = ({ children }: IBodyProps) => {

  return <div
    className='
        flex 
        flex-col 
        h-screen

        bg-waves-top
        bg-cover
        bg-no-repeat 
        bg-center
      '
  >
    <Header />
    <div
      className="
        flex flex-row flex-wrap
        justify-center content-center
      "
    >
      {children}
    </div>
    <Footer />
  </div>
}
