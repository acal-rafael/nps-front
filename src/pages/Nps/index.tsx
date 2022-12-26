import React, { useState, useEffect, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import { Buttons } from '../../components/Buttons';
import { Content } from '../../components/Content';

import { Congratulation } from '../Congratulation';

import { UserContext } from '../../contextApp/userContext';


export interface IQuestionProps {
  notaClicada: string;
  setNotaClicada: React.Dispatch<React.SetStateAction<string | any>>
}

export const Nps = () => {

  const navigate = useNavigate();
  const [notaClicada, setNotaClicada] = useState<IQuestionProps | any>();
  const { ipServer, setNota } = useContext(UserContext);

  useEffect(() => {
    console.log("Nota: ", notaClicada);
    setNota(notaClicada);
    // navigate('/feedback')
  }, [notaClicada])

  useEffect(() => {
    if (parseInt(notaClicada) >= 0) {
      navigate('/feedback')
    } 
  }, [notaClicada])

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
    {/* <h3>{ipServer}</h3> */}
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
          notaClicada={String(index)}
          setNotaClicada={setNotaClicada}
        />
      )}
    </div>
  </>
}






//  return <>
//     {
//       notaClicada !== undefined
//         // ? <Navigate to="/feedback" replace={true} />
//         ? 
//           () => navigate('/feedback')
          
//         : <>
//           <div
//             className='
//               w-[80%]
//                 flex flex-row flex-wrap
//                 //justify-center //content-center
//                 //border-black
//                 //border-[1px]
//               '
//           >
//             <Content />
//           </div>
//           {/* <h3>{ipServer}</h3> */}
//           <div
//             className='
//                 w-[80%]
//                 flex flex-row flex-wrap
//                 justify-center content-center

//                 //border-red-700 
//                 //border-[1px] 
//               '
//           >
//             {cores.map((cor: string, index: number) =>
//               <Buttons
//                 key={index}
//                 cor={cor}
//                 notaClicada={String(index)}
//                 setNotaClicada={setNotaClicada}
//               />
//             )}
//           </div>
//         </>
//     }
//   </>
