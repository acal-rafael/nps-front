import React, { SetStateAction, useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { FeedbackResponse } from '../../components/FeedbackResponse';

import { UserContext } from '../../contextApp/userContext';

interface IRespostas {
  id: number;
  msg: string;
  color: string;
}[]


interface IDivRespostas<T> {
  divRespostas?: string;
  setDivRespostas: React.Dispatch<SetStateAction<T>>;
}[];


export const Feedback = () => {

  const { nota, ipServer } = useContext(UserContext);
  
  const [divRespostas, setDivRespostas] = useState<IDivRespostas<string>>()
  const [respostas, setRespostas] = useState<IRespostas[]>(
    [
      {id: 1, msg: "Ambiente agradável", color: "blue"},
      {id: 2, msg: "Ótimo atendimento", color : "green"},
      {id: 3, msg: "Nâo gostei do atendimento", color: "brown"},
      {id: 4, msg: "Ótimas promoções", color: "gray"},
      {id: 5, msg: "Gostei da recepção", color : "green"},
      {id: 6, msg: "Rapidez no caixa", color: "cyan"},
    ]
  )


  const adicionaDivRespostas = (id: number) => {
    let resp = respostas.filter(resposta => resposta.id == id);
    console.log(resp);
    console.log(typeof resp);

    setDivRespostas( resp[0].msg)

    // setDivRespostas(resp.);
  }

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
          respostas.map((resp) => <FeedbackResponse key={resp.id}
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

                onClick={()=> adicionaDivRespostas(resp.id)}
              />
            )
        }
      </div>
    </div>
  )
}





   