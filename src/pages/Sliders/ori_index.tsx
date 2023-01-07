import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import io from 'socket.io-client';
import { api } from '../../services/api';
import { UserContext } from '../../contextApp/userContext';
import { ImageSlider } from './ori_ImageSlider';


export const Sliders = () => {
  
  const [idImg, setIdImg] = useState<Array<string>>([""]);
  const [active, setActive] = useState<boolean>(false);
  
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
  }, []) 

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


  const socket = io("http://10.40.10.1:4004", {
    autoConnect: true,
  })


  socket.on("server-sending", (res) => {
    let urlHash = res;
    let flag = res.flag;
    const urlString = window.atob(urlHash).split("/");
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
    }
  })

  // console.log("isFlag: ", isFlag)
  

  return (
    <div>
      {isFlag
        && <Navigate to="/nps" replace={true} />
      }

      { }
      <div>
        <ImageSlider ids={idImg} />
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