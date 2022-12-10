import React from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Circle } from '../../pages/Teste/Circle';

interface IBodyProps {
  children: React.ReactNode;
}

export const Body = ({ children }: IBodyProps) => {

  return <div
    style={{

      //background: `linear-gradient(160deg, #0096D5, #ffffff, #ffffff, #ffffff, #0096D5)`,

    }}

    className='
        flex 
        flex-col 
        h-screen
        relative

        //bg-waves-top
        //bg-cover
        //bg-no-repeat 
        //bg-center

        //bg-gradient-to-tr
        //from-[#0096D5]
        //via-[#FFFFF]
        //to-[#0096D5]

        //bg-gradient-to-tr
        //from-sky-400
        //via-white
        //to-sky-400

        //bg-gradient-to-t
        //from-sky-400
        //via-white
        //to-sky-400
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
