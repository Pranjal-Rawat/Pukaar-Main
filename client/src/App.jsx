import React from 'react'
import { Suspense , lazy } from 'react'
import  { BrowserRouter, Routes , Route} from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';


const Home = lazy(() => import('./pages/Home'));
const Joinus = lazy(() => import('./pages/Joinus'));
export default function App() {
  return (
    <Suspense fallback={<>Loading  ... </>}>

      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/joinus' element={<Joinus/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Suspense>
  )
}
