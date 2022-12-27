import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { FeedbackResponse } from '../../components/FeedbackResponse';

import { UserContext } from '../../contextApp/userContext';

interface IRespostas {
  msg: string;
  color: string;
}[]



export const Feedback = () => {

  const { nota, ipServer } = useContext(UserContext);
  
  const [areaRespostas, setAreaRespostas] = useState<[]>([])
  const [respostas, setRespostas] = useState<IRespostas[]>(
    [
      {msg: "Ambiente agradável", color: "blue"},
      {msg: "Ótimo atendimento", color : "green"},
      {msg: "Nâo gostei do atendimento", color: "brown"},
      {msg: "Ótimas promoções", color: "gray"},
      {msg: "Gostei da recepção", color : "green"},
      {msg: "Rapidez no caixa", color: "cyan"},
    ]
  )


  // const location = useLocation();
  // const navigate = useNavigate();

  return (  
    <div 
      className='
        flex
        flex-col
      '
    >
      <div 
        className='
          w-100
          h-[300px]
          mb-8
          border-[1px]
          border-sky-400
          rounded-2xl
          //focus:outline-sky-500
          focus:outline-none
          //focus:border-none
          //focus:border-t-sky-400
          //focus:shadow-md
        focus:shadow-sky-500

        '
        

      >
      </div>

      <div 
        className='
          flex
          gap-4
          
        '
      >
        <h2>Nota: {nota}</h2>
        <br />
        <h2>Ip: {ipServer}</h2>
        {
          respostas.map((resp, index) => <FeedbackResponse key={index}
                className={`
                  border-[1px]
                  rounded-xl
                  p-2
                  
                  hover:cursor-pointer

                `}
                
                style={{
                  backgroundColor: `${resp.color}`,
                  color: "white"
                }}  
                
                feed={resp.msg} 

                onClick={()=> alert("Clicado!")}
              />
            )
        }
      </div>
    </div>
  )
}





   