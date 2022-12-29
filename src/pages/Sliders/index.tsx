import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import io from 'socket.io-client';


// const socket = io();
const socket = io("http://192.168.1.100:4004")
export const Sliders = () => {

  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [goPage, setGoPage] = useState<boolean>(false)

  // useEffect(() => {
  //   socket.on("ws-response", (res) => {
  //     console.log("Cliente de ", res);
  //     console.log(String(isConnected))
  //   })
  // }, [isConnected])


  // useEffect(() => {
  //   setInterval(() => {
  //     setGoPage(prev => !prev);
  //   }, 2000)
  // }, [])

  socket.on("ws-response", (res) => {
    console.log("Cliente de ", res);
    console.log(String(isConnected))
  })

  return (
    <div>
      {/* {isConnected
        && <Navigate to="/nps" replace={true} />
      } */}

      <h1>Sliders</h1>
      {/* {goPage && <Navigate to="/nps" replace={true} />} */}
      {/* <button
        onClick={() => setInterval(() => setGoPage(prev => !prev), 200)}
      >Avançar</button> */}

    </div>
  )
}






// return (

//   <div>

//     <p>Sliders</p>
//     {goPage && <Navigate to="/nps" replace={true} />}
//     <button
//       onClick={() => setInterval(() => setGoPage(prev => !prev), 200)}
//     >Avançar</button>
//     <>
//       {
//         socket.on("ws-response", (res) => {
//           console.log("Cliente de ", res);
//           console.log(String(isConnected))
//         })
//       }
//     </>
//   </div>
// )
