import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contextApp/userContext'

export const Header = () => {

  const [nomeCliente, setNomeCliente] = useState<string>("");
  const { cliente } = useContext(UserContext);

  useEffect(() => {
    setNomeCliente(prev => {
      if (cliente.length > 0) {
        prev = `${cliente}, `
        return prev;
      } else {
        prev = "";
        return prev;
      }
    })
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
      <p>Logo da Acal</p>
      {/* <p>Olá{nomeCliente == "" && nomeCliente}, seja bem vindo!</p> */}
      <p>Olá, {nomeCliente} seja bem vindo!</p>
    </div>
  )
}
