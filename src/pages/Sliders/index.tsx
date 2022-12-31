import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import io from 'socket.io-client';
import { UserContext } from '../../contextApp/userContext';


// const socket = io();
// const socket = io("http://192.168.1.100:4004")
// const socket = io("http://10.1.5.217:4008")
const socket = io("http://10.40.10.1:4008")   // conexão vpn


export const Sliders = () => {

  const [isConnected, setIsConnected] = useState<boolean>(false);

  const { setCliente } = useContext(UserContext);


  socket.on("ws-response", (res) => {
    console.log("Cliente de ", res);

    setIsConnected(res.flag);
    setCliente(res.cliente)
    
    if (res.flag) {
      socket.close();
    } else {
      socket.connect();
    } 
  })

  return (
    <div>
      {isConnected
        && <Navigate to="/nps" replace={true} />
      }

      <h1>Sliders</h1>
    </div>
  )
}
