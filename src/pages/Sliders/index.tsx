import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import io from 'socket.io-client';
import { api } from '../../services/api';
import { UserContext } from '../../contextApp/userContext';
// import { ImageSlider } from './ImageSlider';


export const Sliders = () => {
  
  const socket = io("http://10.1.5.76:4004", {
    autoConnect: true,
  })


  const [idImg, setIdImg] = useState<Array<string>>([""]);
  const [active, setActive] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlag, setIsFlag] = useState<boolean>(false);
  const { setCliente } = useContext(UserContext);
  
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   //speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };


  useEffect(() => {
    getImagens()
    setCurrentIndex(1);
  }, []) 

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === idImg.length -1) {
        setCurrentIndex(0);
        // console.log("IF: ", currentIndex);
      } else {
        setCurrentIndex(currentIndex + 1);
        // console.log("IF: ", currentIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex])

  const getImagens = () => {
     api.get("imagens")
      .then(res => {
        res.data
        console.log(res.data)
        setIdImg(res.data);
      }) 
      .catch(err => console.log("Error: ", err))
      // return arrIds.data
  }

  socket.on("10.1.5.76", res => {
    
    console.log(res);

    // if (JSON.parse(res).pedido == '53685') {
    //   socket.close();
    //   setIsFlag(true);
    //   console.log("Connexão FECHADA com o back 2!")
    // } else {
    //   console.log("Connexão ABERTA com o back 2!")
    //   socket.close();
    // }

    
    let urlHash = res.hash;
    let flag = res.flag;
    const urlString = atob(urlHash).split("/");
    console.log(urlString);

    // if (urlString[0].length > 0) {
    if (flag) {
      socket.close();
      
      console.log(urlString)
      console.log("Usuario: ", urlString[0])

      setIsFlag(true);
    
      setCliente(prev => prev = urlString[0])
      console.log("Connexão FECHADA com o back 2!")
      
    }
    else {
      // console.log(socket.active)
      console.log("Connexão ABERTA com o back 2!")
      // console.log("Flag: ", toString(true))
      socket.close();
    }
  })

  // console.log("isFlag: ", isFlag)
  console.log(`https://lojaacal.vteximg.com.br/arquivos/ids/${idImg[currentIndex]}`)
  console.log("Socket: ", socket.connected)

  return (
    <div>
      {isFlag
        && <Navigate to="/nps" replace={true} />
      }

      <div>
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
      </div>
      
    </div>
  )
}



 {/* <p
  classNameName='
    text-9xl
  '
>
  {`< `} Sliders {` >`}
</p> */}