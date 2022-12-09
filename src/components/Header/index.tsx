import React from 'react'

export const Header = () => {

  let cliente = "Fulano"

  return (
    <div
      className='
        w-[80%]
        m-auto

        flex
        flex-row
        justify-between

        border-black
        border-[1px]

        //bg-waves-top
        //bg-cover
        //bg-no-repeat 
        //bg-center 

      '
    >
      <p>Logo da Acal</p>
      <p>Olá, {cliente}, seja bem vindo!</p>
    </div>
  )
}
