import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Feedback = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;




  return (
    <div>Feedback</div>
  )
}
