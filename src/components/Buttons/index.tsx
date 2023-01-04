import React, { useState, useEffect, SetStateAction } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

interface IButtonProps {
  cor: string;
  notaClicada: string;
  setNotaClicada: Function;
}

export const Buttons = ({ cor, notaClicada, setNotaClicada }: IButtonProps) => {
  const navigate = useNavigate()
  const [corBtn, setCorBtn] = useState<string>("")

  useEffect(() => {
    setCorBtn(cor)
  }, [cor])

  return <button
    onClick={() => setNotaClicada((prev: string) => prev = notaClicada)}

    style={{
      backgroundColor: corBtn
    }}

    className='
      w-[5.5rem] h-[5.5rem]
    
      text-white font-bold text-3xl
      shadow-2xl
    
        rounded-full ml-2 mt-2
    '
  >
    {notaClicada}
  </button>

}
