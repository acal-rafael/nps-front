import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import io from 'socket.io-client';
import { UserContext } from '../../contextApp/userContext';


export const Sliders = () => {

  // const socket = io("http://192.168.1.100:4004")
  // const socket = io("http://10.1.5.217:4008")
  const socket = io("http://10.40.10.1:4008", {
    autoConnect: true,
  })   // conexão vpn


  const [isFlag, setIsFlag] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const { setCliente } = useContext(UserContext);

  socket.on("ws-response", (res) => {
    if (res.flag) {     
      setIsFlag(true);  
      console.log("Connexão fechada com o back: ", socket.active)
      socket.close(); 
    }
     else {
      console.log("Connexão aberta com o back: ", socket.active)
    }
  })

  return (
    <div>
      {isFlag
        && <Navigate to="/nps" replace={true} />
      }
      <h1>Sliders</h1>
    </div>
  )
}
