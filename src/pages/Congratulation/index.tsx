import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import congratulation from "../../../public/images/congratulation.gif"
// import waves from "../../../public/images/waves.gif"

export const Congratulation = () => {

  const [isFlag, setIsFlag] = useState<boolean>(false);

  setTimeout(() => {
    setIsFlag(true);
  }, 3000)
  return <>
    {
      isFlag
      && <Navigate to="/sliders" replace={true} />
    }
    <img src={congratulation} width={400} height={400} />
  </>
}
