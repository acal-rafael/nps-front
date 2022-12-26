import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'

export const Sliders = () => {

  const [goPage, setGoPage] = useState<boolean>(false)
  // const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setGoPage(prev => !prev);
    }, 2000) 
  }, [])


  return (
    <div>
    
      <p>Sliders</p>
      {goPage && <Navigate to="/nps" replace={true} />}

    </div>
  )
}
