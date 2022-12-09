import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Body } from '../components/Body'
import { Home } from '../pages/Home'
import { Feedback } from '../pages/Feedback'
import { Congratulation } from '../pages/Congratulation'

export const Router = () => {

  return (
    <Routes>
      <Route path='/:urlhash' element={<Body>
        <Home />
      </Body>}
      />

      <Route path='/feedback' element={<Body>
        <Feedback />
      </Body>}
      />

      <Route path='/congratulation' element={<Body>
        <Congratulation />
      </Body>}
      />

      <Route path='/*' element={<Body>
        <h2>Pagina nao encontrada</h2>
      </Body>}
      />

    </Routes>
  )
}
