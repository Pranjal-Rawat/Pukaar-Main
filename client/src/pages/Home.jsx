import React, { useRef, useEffect, useState } from 'react';
import video from '../Assests/Homeslide.mp4';
import video2 from '../Assests/partners.mp4';
import { Button } from '@mui/material';
import Contact from '../components/Contact';
import Partners from '../components/Partners';
import About from '../components/About';
import { FeaturedImageGallery } from '../components/Gallerry';
import Nav from '../components/Nav';
import Loader from '../components/Loader'; // Assuming Loader component is correctly implemented
import Team from '../components/Team';
import { useDonation } from '../components/Donation';

export default function Home() {
  const galleryRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [videoLoading, setVideoLoading] = useState(true); // State to track video loading
  const images = [
    '../Assests/Homeslide.mp4',
    '../Assests/partners.mp4',
  ];

  const { openModal } = useDonation(); // Access openModal function from the context

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the target is visible
    });

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  // Automatically change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Handler for video loaded event
  const handleVideoLoaded = () => {
    setVideoLoading(false); // Set loading state to false when video is loaded
  };

  return (
    <>
      {!showNav && <Nav />}
      <div className='flex flex-col lg:flex-row hero-img w-full lg:mt-0 mt-28 gap-5'>
        {/* Use the currentImgIndex to dynamically change the video source */}
        {/* {videoLoading ? ( */}
          {/* <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 999 }}>
            <Loader /> {/* Display loader component while video is loading */}
         
        {/* ) : (
          <></>
        )} */}
        <video
          src={video} // Ensure to use video as src here
          autoPlay
          muted
          loop
          onLoadedData={handleVideoLoaded} // Call handleVideoLoaded on video loaded
        ></video>
        <div className="flex items-start mt-10 lg:pt-4 flex-col px-4 w-full gap-5">
          <p className='font-bold text-start lg:text-4xl text-3xl px-5 hero-text' style={{ color: "#6e1b2a" }}>
            Empowering Communities
          </p>
          <p className='px-5'>
            Welcome to Pukaar Sanstha, where our vision is to create a harmonious and sustainable world where individuals and communities thrive through empowerment, employment generation, sustainability, and eco-tourism. Discover our mission, initiatives, and the positive impact we're making both locally and globally.
            <br />
          </p>
          <p className="px-5 lg:flex hidden">
            At Pukaar Sanstha, we strive to foster a future where every individual and community not only survives but thrives. Through our dedicated mission, we aim to empower marginalized groups, generate meaningful employment opportunities, promote sustainability practices, and champion eco-tourism initiatives. By doing so, we believe in creating a positive impact locally and globally, ensuring a more harmonious and sustainable world for generations to come.
          </p>
          <p className='flex justify-start w-full px-5' style={{ color: "#6e1b2a" }}>
            <Button variant='outlined' color='inherit' sx={{ fontWeight: "600" }} onClick={openModal}>
              Donate now
            </Button>
          </p>
        </div>
      </div>
      <About />

      <Partners />
      <div ref={galleryRef}>
        <div className='px-4'>
          <FeaturedImageGallery />
        </div>
      </div>
      <Team />
      <Contact />
    </>
  );
}
