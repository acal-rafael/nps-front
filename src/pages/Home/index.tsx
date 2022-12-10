import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import { Buttons } from '../../components/Buttons';
import { Content } from '../../components/Content';

import { Congratulation } from '../Congratulation';


export interface IHomeProps {
  nota: string;
  setNota: React.Dispatch<React.SetStateAction<string>>
}

export const Home = () => {

  const [nota, setNota] = useState<IHomeProps>();

  useEffect(() => {
    console.log("Nota: ", nota);
  }, [nota])

  const cores = [
    "#B72027",
    "#D42127",
    "#F25222",
    "#F37022",
    "#FBA723",
    "#FFCA26",
    "#ECDB11",
    "#E9E63F",
    "#C5D92A",
    "#AED232",
    "#65B74B"
  ]

  return <>
    {
      nota !== undefined
        ? <Navigate to="/feedback" replace={true} />
        : <>
          <div
            className='
              w-[80%]
                flex flex-row flex-wrap
                //justify-center //content-center
                //border-black
                //border-[1px]
              '
          >
            <Content />
          </div>

          <div
            className='
                w-[80%]
                flex flex-row flex-wrap
                justify-center content-center

                //border-red-700 
                //border-[1px] 
              '
          >
            {cores.map((cor: string, index: number) =>
              <Buttons
                key={index}
                cor={cor}
                nota={String(index)}
                setNota={setNota}
              />
            )}
          </div>
        </>
    }
  </>
}
