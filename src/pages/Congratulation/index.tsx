import React from 'react'
import congratulation from "../../../public/images/congratulation.gif"
// import waves from "../../../public/images/waves.gif"

export const Congratulation = () => {
  return <>
    {setTimeout(() => {
      window.location.href = "/sliders"
    }, 5000)}
    <img src={congratulation} width={400} height={400} />
  </>
}
