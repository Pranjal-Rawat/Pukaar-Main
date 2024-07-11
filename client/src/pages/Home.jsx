import React from 'react'
import video from '../Assests/Homeslide.mp4'
import video2 from '../Assests/partners.mp4'
import { Button, Typography } from '@mui/material'
import Contact from '../components/Contact'
import Partners from '../components/Partners'
export default function Home() {
  return (
    <>

      <div className='flex flex-col lg:flex-row hero-img w-full lg:mt-0 mt-28 gap-5'>
        <video src={video} autoPlay muted loop></video>
        <div className="flex items-center mt-10 flex-col px-4 w-full gap-5">
          <p className='font-bold lg:text-4xl text-3xl px-5 hero-text' style={{ color: "#6e1b2a" }}>
            Empowering Communities for a Harmonious and Sustainable Future
          </p>
          <p className='px-5'>
            Welcome to Pukaar Sanstha, where our vision is to create a harmonious and sustainable world where individuals and communities thrive through empowerment, employment generation, sustainability, and eco-tourism. Discover our mission, initiatives, and the positive impact we're making both locally and globally.
          </p>
          <p className='flex justify-start w-full px-5' style={{ color: "#6e1b2a" }}>
            <Button variant='outlined' color='inherit' sx={{ fontWeight: "600" }}>
              Join Us
            </Button>
          </p>
        </div>
      </div>
      <Partners />
      <div className="flex lg:px-5 flex-col lg:flex-row hero-img w-full lg:mt-0 mt-28 gap-5">
        <video className='lg:h-96' src={video2} autoPlay muted loop></video>
        <div className="flex  mt-10 flex-col px-10 w-full gap-5">
          <p className='font-bold  lg:text-4xl text-3xl border-l-8  pl-4 hero-text' style={{ color:"#020202", borderColor: "#6e1b2a" }}>
            Our Partners
          </p>

          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Project Purkul </p>
            <a className='text-indigo-600' href="https://www.projectpurkul.com/">link/</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Gyanoday </p>
            <a className='text-indigo-600' href="link/">link/</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Himaagman Foundation </p>
            <a className='text-indigo-600' href="link/">link/</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Ucost </p>
            <a className='text-indigo-600' href="link/">link/</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Giri Foundation</p>
            <a className='text-indigo-600' href="link/">link/</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Proect Aina</p>
            <a className='text-indigo-600' href="link/">link/</a>
          </li>

        </div>
      </div>
      <Contact />
    </>
  )
}
