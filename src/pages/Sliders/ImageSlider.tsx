import React, { useState, useEffect } from 'react'


export interface IImgProps {
  ids: Array<string>;
}

export const ImageSlider = ({ ids }: IImgProps ) => {

  const [idImg, setIdImg] = useState<Array<string>>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // https://lojaacal.vteximg.com.br/arquivos/ids/${slides[currentIndex]}

  useEffect(() => {
    setIdImg(ids);
    setCurrentIndex(0);
  }, [ids])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === idImg.length -1) {
        setCurrentIndex(0);
        console.log("IF: ", currentIndex);
      } else {
        setCurrentIndex(currentIndex + 1);
        console.log("IF: ", currentIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex])

  console.log(`https://lojaacal.vteximg.com.br/arquivos/ids/${idImg[currentIndex]}`)

  return (
    <img
        className={`
            w-screen
            h-screen
            bg-cover
            //bg-no-repeat
      
            border-[1px]
            border-[black]
          `}
        src={`https://lojaacal.vteximg.com.br/arquivos/ids/${idImg[currentIndex]}`}
        alt=""
      />
  )
}
