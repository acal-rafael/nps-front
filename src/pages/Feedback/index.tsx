import React, { SetStateAction, useContext, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

import { FeedbackResponse } from '../../components/FeedbackResponse';

import { UserContext } from '../../contextApp/userContext';
import { Link } from 'react-router-dom';
import { Sliders } from '../Sliders';

interface IRespostas {
  id: number;
  msg: string;
  color: string;
}[]

interface IArrString extends String {
  msg: string;
  setMsg: React.Dispatch<SetStateAction<string>>;
}[]


export const Feedback = () => {

  const navigate = useNavigate();
  const { nota, ipServer, cliente } = useContext(UserContext);

  const [divRespostas, setDivRespostas] = useState<string[]>([]);
  const [respostas, setRespostas] = useState<IRespostas[]>(
    [
      { id: 1, msg: "Ambiente agradável", color: "blue" },
      { id: 2, msg: "Ótimo atendimento", color: "green" },
      { id: 3, msg: "Não gostei do atendimento", color: "brown" },
      { id: 4, msg: "Ótimas promoções", color: "gray" },
      { id: 5, msg: "Gostei da recepção", color: "green" },
      { id: 6, msg: "Rapidez no caixa", color: "cyan" },
    ]
  )


  const adicionaDivRespostas = (id: number) => {
    let { msg } = respostas.filter(resposta => resposta.id == id)[0];
    msg = msg.concat(", ");

    setDivRespostas(prevMsg => [...prevMsg, msg])
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
          text-4xl

          //focus:outline-sky-500
          focus:outline-none
          //focus:border-none
          //focus:border-t-sky-400
          //focus:shadow-md
        focus:shadow-sky-500

        '


      >
        {divRespostas.map(respostas => respostas)}
      </div>

      <div
        className='
          flex
          gap-4
          
        '
      >
        <h2>Nota: {nota}</h2>
        <h3>Cliente: {cliente}</h3>
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

            onClick={() => adicionaDivRespostas(resp.id)}
          />
          )
        }
      </div>
      <br></br>
      <hr />
      {/* <a href="http://127.0.0.1:5173/sliders"
        className='
          w-20
          h-12
          //block
          text-center
          border-[2px]
          border-black
          rounded-2xl
          bg-[blue]
          font-bold
          text-white
        '
       >Enviar</a> */}
      <Link
        className='
          w-20
          h-12
          //block
          text-center
          border-[2px]
          border-black
          rounded-2xl
          bg-[blue]
          font-bold
          text-white
          
        '
        to='/sliders'
       >Enviar</Link>
       <button 
        // onClick={() => navigate("/sliders")}
        onClick={() =><Navigate to="\sliders" replace={true} />}
       >
        Enviar
       </button>
    </div>
  )
}





