import React from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'

export const Sliders = () => {

  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      
      {setInterval(() => {
        // () => <Navigate to="nps" replace={true} />
        navigate('/nps')
      }, 5000)}
        
          
      Sliders

    </div>
  )
}
