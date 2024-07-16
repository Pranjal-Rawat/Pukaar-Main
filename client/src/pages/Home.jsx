import React from 'react'
import video from '../Assests/Homeslide.mp4'
import video2 from '../Assests/partners.mp4'
import { Button, Typography } from '@mui/material'
import Contact from '../components/Contact'
import Partners from '../components/Partners'
import About from '../components/About'
export default function Home() {
  return (
    <>
      <div className='flex flex-col lg:flex-row hero-img w-full lg:mt-0 mt-28 gap-5'>
        <video src={video} autoPlay muted loop></video>
        <div className="flex items- mt-10 lg:pt-10 flex-col px-4 w-full gap-5">
          <p className='font-bold text-start lg:text-4xl text-3xl px-5 hero-text' style={{ color: "#6e1b2a" }}>
            Empowering Communities
          </p>
          <p className='px-5'>
            Welcome to Pukaar Sanstha, where our vision is to create a harmonious and sustainable world where individuals and communities thrive through empowerment, employment generation, sustainability, and eco-tourism. Discover our mission, initiatives, and the positive impact we're making both locally and globally.
          </p>
          <p className='flex justify-start w-full px-5' style={{ color: "#6e1b2a" }}>
            <Button variant='outlined' color='inherit' sx={{ fontWeight: "600" }}>
              Donate now
            </Button>
          </p>
        </div>
      </div>
      <About/>

      <div id='partners' className="flex lg:px-5 flex-col lg:flex-row hero-img w-full lg:mt-0 mt-28 gap-5">
        <video className='lg:h-96' src={video2} autoPlay muted loop></video>
        <div className="flex  mt-2 flex-col px-10 w-full gap-5">

        
          <p className='font-bold  lg:text-4xl text-3xl border-l-8  pl-4 hero-text' style={{ color:"#020202", borderColor: "#6e1b2a" }}>
            Our Partners
          </p>
{/*
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Project Purkul </p>
            <a className='text-indigo-600' href="https://www.projectpurkul.com/">projectpurkul.com</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Gyanoday </p>
            <a className='text-indigo-600' href="https://gyanoday.org.in/">gyanoday.org.in/</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Himaagman Foundation </p>
            <a className='text-indigo-600' href="https://www.facebook.com/khadimissionwardha/">himaagmanfoundationfacebook.com</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Ucost </p>
            <a className='text-indigo-600' href="https://ucost.uk.gov.in/">ucost.uk.gov.in/</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Giri Foundation</p>
            <a className='text-indigo-600' href="https://www.girifoundation.org/">girifoundation.org</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Proect Aina</p>
            <a className='text-indigo-600' href="https://www.projectaaina.in/">projectaina.in</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Hindska Trust</p>
            <a className='text-indigo-600' href="https://www.hindskatrust.org/">hindskatrust</a>
          </li>
          <li style={{color:"#6e1b2a"}} className='flex  text-lg font-medium justify-between'>
            <p>Zindagi Mubarak</p>
            <a className='text-indigo-600' href="https://www.instagram.com/zindagi.mubarak/">insta.zindagimubarak.com</a>
          </li> */}
          <p>
          Project Purkul creates beautiful and functional handicrafts using intricate techniques such as patchwork, applique, and quilting. Gyanoday uplifts marginalized communities by providing educational opportunities since 2001. Himaagman Foundation's "Empowering Futures" initiative supports 150 underprivileged children with essential materials, school bags, and uniforms. UCOST, an autonomous government body, focuses on science and technology development in Uttarakhand. Giri Foundation aims to uplift 1 million Himalayan women through skill training in business, financial literacy, management, and confidence building. Project Aaina fosters self-reflection and inner consciousness through artistic events like mindfulness retreats and community welfare activities. Hindska Trust believes in education for all and empowers communities through educational initiatives. Lastly, Zindagi Mubarak is a festival celebrating life, organized by @ishqestantv and @meghna_chatterji, promoting a joyful celebration of existence.
          </p>
        </div> 
      </div>
      <Partners />
      <Contact />
    </>
  )
}
