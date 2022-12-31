import React, { useContext, useEffect, useState } from 'react'

import { UserContext } from '../../contextApp/userContext'

export const Footer = () => {
  const [ipServerBack, setIpServerBack] = useState<string>("");
  const { ipServer } = useContext(UserContext);

  useEffect(() => {
    setIpServerBack(prev => prev = ipServer);
  }, [ipServer]);

  return (
    <div
      className='
      p-4
      w-[80%]
      h-12
      m-auto

      flex
      flex-row
      justify-around
      content-center

      //border-black
      //border-[1px]
      '
    >
      {/* <p>IP do back:  {ipServer.length < 0 ? `0.0.0.${ipServer[ipServer.length - 1]}` : "0.0.0.0"}</p> */}
      <p>Footer</p>
    </div>
  )
}
