import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import io from 'socket.io-client';
import { UserContext } from '../../contextApp/userContext';


// const socket = io();
const socket = io("http://192.168.1.104:4008")
// const socket = io("http://10.1.5.217:4008")


export const Sliders = () => {

  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [nome, setNome] = useState<string>("");
  const [goPage, setGoPage] = useState<boolean>(false)

  const { setCliente } = useContext(UserContext);


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
    // console.log(socket.connected);
    // console.log(String(isConnected));
    setIsConnected(res.flag);
    setCliente(res.cliente)

    // socket.emit("ws-disconnect", {flag: true});
    if (res.flag) {
      socket.close();
    } else {
      socket.connect();
    }
  })

  // socket.emit("ws-disconnect", {flag: true});

  return (
    <div>
      {/* {isConnected
        && <Navigate to="/nps" replace={true} />
      } */}

      {isConnected
        && <Navigate to="/nps" replace={true} />
      }

      <h1
        className='
          text-9xl
        '
      >{`<`} Sliders {`>`}</h1>
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
