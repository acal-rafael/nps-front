import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Body } from '../components/Body'

import { Home } from '../pages/Home'
import { Feedback } from '../pages/Feedback'
import { Congratulation } from '../pages/Congratulation'
import { DivCircleInto } from '../pages/Teste/DivCircleInto'
import { Teste } from '../pages/Teste'

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

      {/* Routes of the test UI */}
      <Route path='/teste' element={<Teste />} />
      <Route path='/div-circle-into' element={<DivCircleInto />} />

      {/* Route of the page not found */}
      <Route path='/*' element={<Body>
        <h2>Pagina nao encontrada</h2>
      </Body>}
      />

    </Routes>
  )
}
