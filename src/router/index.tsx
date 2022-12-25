import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Body } from '../components/Body'

import { Question } from '../pages/Question'
import { Feedback } from '../pages/Feedback'
import { Congratulation } from '../pages/Congratulation'
import { DivCircleInto } from '../pages/Teste/DivCircleInto'
import { Teste } from '../pages/Teste'
import { Home } from '../pages/Home'

export const Router = () => {

  return (
    <Routes>
      <Route path='/' element={<Body>
        <Home />
      </Body>}
      />

      <Route path='/nps' element={<Body>
        <Question />
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
