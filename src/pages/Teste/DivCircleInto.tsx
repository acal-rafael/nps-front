import React from 'react'

export const DivCircleInto = () => {
  return (
    <div
      className='
        w-full h-screen
        relative
        border-[1px]
        border-black
        flex
        justify-center
        content-center
        overflow-hidden
      '
    >
      <div className='
          w-[60%] h-[60%]

          
          absolute
          -right-[20%]
          -top-[10%]

          blur-[60px]

          rounded-bl-[90%]
          bg-[#0096D5]
        '
      >
      </div>

      <div className='
          w-80
          h-40

          border-[1px]
          border-black
          m-auto


          flex
          flex-col
          //text-center
          //align-middle
          items-center
          justify-center
          content-center
          //self-center
          
        '
      >
        <p
          className='
            border-[1px]
           border-black
           right-1
          '
        >Nada</p>
      </div>

      <div className='
          w-[60%] h-[60%]

          absolute
          -left-[20%]
          -bottom-[10%]

          blur-[60px]
          
          rounded-tr-[90%]
          bg-[#0096D5]
          
        '
      >
      </div>
    </div>
  )
}
