import React from 'react'

export const Content = () => {
  var empresa = "Empresa X";

  const info = <div>
    <p
      className='
        text-2xl
        text-center 
        mb-4 
      '
    >Em uma escala de 0 a 10, qual é a probabilidade de você recomendar o nosso produto/serviço/empresa para um amigo ou colega?</p>
  </div>

  return <>
    {info}
  </>
}



// const info = <div>
//     <p>Queremos aprender, com <span> 1 pergunta</span> em <span> 30 segundos</span> como foi sua  experiência com a nossa empresa.</p><p>Agradecemos sua colaboração.</p>
//     <p>Em uma escala de 0 a 10, o quanto você indica a {empresa} a um amigo ou familiar?</p>
//   </div>