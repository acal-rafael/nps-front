import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contextApp/userContext'

export const Header = () => {
  const [nomeCliente, setNomeCliente] = useState<string>("");

  const { cliente } = useContext(UserContext);

  useEffect(() => {
    setNomeCliente(prev => prev = cliente)
  }, [cliente])


  return (

    <div
      className='
        w-[80%]
        m-auto

        flex
        flex-row
        justify-between

        //border-black
        //border-[1px]

        //bg-waves-top
        //bg-cover
        //bg-no-repeat 
        //bg-center 
      '
    >
      <p
        className='
        text-xl
      '
      >Logo da {`Empresa X`}</p>
      <p
        className='
          text-xl
        '
      >Olá, {nomeCliente.length > 0 ? `${nomeCliente}, ` : ""} seja bem vindo á {`Empresa X`}</p>
    </div>
  )
}
