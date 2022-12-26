import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { UserContext } from '../../contextApp/userContext';

export const Feedback = () => {

  const { nota, ipServer } = useContext(UserContext);

  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;




  return (
    <div>
      <h3>Feedback</h3>
      <h2>Nota: {nota}</h2>
      <br />
      <h2>Ip: {ipServer}</h2>
    </div>
  )
}
