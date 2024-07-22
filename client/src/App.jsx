import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { DonationProvider } from './components/Donation'

const Home = lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <DonationProvider>
      <Suspense fallback={<Loader></Loader>}>
        <BrowserRouter>
          {/* <Nav/> */}
          <Routes>
            <Route path='/' element={<Home></Home>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </DonationProvider>
  )
}
