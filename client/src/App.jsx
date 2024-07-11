import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Loader from './components/Loader'

const Home = lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <Suspense fallback={<Loader></Loader>}>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element={<Home></Home>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </Suspense>
  )
}
