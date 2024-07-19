import React, { useState, useEffect, useRef } from 'react';
import logo from '../Assests/pukaarsans.jpg';
import logo2 from '../Assests/pukaarsans2.jpg';
import { Divider, IconButton, Button } from '@mui/material';
import { Close, Menu, ArrowDropDown, Call, Mail, LocationCity, ArrowUpward, ArrowDropUp } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';
import Modal from 'react-modal'; // Import Modal from react-modal
import './Nav.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

export default function Nav() {
    const [showNav, setShowNav] = useState(false);
    const [fixed, setFixed] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setFixed(window.scrollY > 0);
        };

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setShowNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDonateClick = () => {
        window.location.href = "https://razorpay.me/@tgciinstitute";
    };

    return (
        <>
            <nav className='hidden lg:flex justify-evenly items-start pt-8 h-32'>
                <div className="flex items-start">
                    <img src={logo} style={{ borderRadius: "100%", position: "absolute", top: "-2px", left: "40px", height: "130px" }} alt="" />
                </div>
                <div className="flex gap-4">
                    <div className="icon">
                        <IconButton sx={{ background: "#010101", color: "#f3f3f3" }}>
                            <LocationCity />
                        </IconButton>
                    </div>
                    <div className="data flex flex-col gap-2">
                        <small className='text-gray-600'>You may reach us at</small>
                        <small className='font-bold text-slate-700 text-xs'><a href="https://maps.app.goo.gl/uVZnrLqudCod6C5u7">Pacific Golf Estate, Dehradun</a></small>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="icon">
                        <IconButton sx={{ background: "#010101", color: "#f3f3f3" }}>
                            <Mail />
                        </IconButton>
                    </div>
                    <div className="data flex flex-col gap-2">
                        <small className='text-gray-600'>Email Us at</small>
                        <small className='font-bold text-slate-700 text-xs'>pukaarsanstha@gmail.com</small>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="icon">
                        <IconButton sx={{ background: "#010101", color: "#f3f3f3" }}>
                            <Call />
                        </IconButton>
                    </div>
                    <div className="data flex flex-col gap-2">
                        <small className='text-gray-600'>Contact Us at</small>
                        <small className='font-bold text-slate-700 text-xs'>+91 9873504123</small>
                    </div>
                </div>
            </nav>
            <Divider />

            <nav className='hidden lg:flex justify-center w-full absolute' style={{ top: "100px" }} >
                <div className='flex px-52 py-4 rounded gap-8' style={{ background: "#6e1b2a", color: "#f1f1f1" }}>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='hover:text-white'>Home</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} className='hover' to="joinus">Join Us</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} className='hover' to="about">About</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} className='hover' to="partners">Our Partners</ScrollLink>
                    <NavLink onClick={(e) => {
                        e.preventDefault();
                        setShowDropdown(!showDropdown);
                    }} className='hover flex relative gap-2' to="/newsletter">Newsletter
                        <span>
                            {
                                showDropdown ?
                                    <IconButton className='h-5 w-5' color='inherit'>
                                        <ArrowDropUp />
                                    </IconButton>
                                    :
                                    <IconButton className='h-5 w-5' color='inherit'>
                                        <ArrowDropDown />
                                    </IconButton>
                            }
                        </span>
                        <div className={`absolute ${showDropdown ? 'showDropdown' : 'hideDropdown'} bg-white rounded text-black text-nowrap list-none px-3 py-5 flex flex-col gap-1 top-9`}>
                            <NavLink to='/'>Latest </NavLink>
                            <NavLink to='/'>Previous </NavLink>
                            <NavLink to='/'>All Newsletter</NavLink>
                        </div>
                    </NavLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} className='hover' to="blog">Blog</ScrollLink>
                </div>
            </nav>

            <nav style={{ zIndex: "998" }} className="lg:hidden fixed top-0 w-full flex py-3 px-4 justify-between bg-white">
                <div className="logo">
                    <img src={logo2} style={{ height: "100px" }} alt="" />
                </div>
                <div className="flex items-center">
                    <Button onClick={handleDonateClick}>
                        Donate Now
                    </Button>
                    <IconButton onClick={() => setShowNav(true)}>
                        <Menu />
                    </IconButton>
                </div>
            </nav>

            <nav ref={navRef} className={`lg:hidden fixed top-0 w-full flex py-3 justify-end ${showNav ? 'showNav' : 'hideNav'}`}>
                <div style={{ width: "300px", height: "100vh", color: "#f1f1f1", background: "rgb(0,0,0)" }} className="fixed left-0 top-0 flex flex-col gap-8">
                    <div className="btn flex justify-end px-5 py-4">
                        <IconButton onClick={() => setShowNav(false)} color='inherit'>
                            <Close />
                        </IconButton>
                    </div>
                    <ul className='flex px-3 flex-col gap-3'>
                        <li className='nav-link'><ScrollLink onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="/">Home</ScrollLink></li>
                        <li className='nav-link'><ScrollLink onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="about">About</ScrollLink></li>
                        <li className='nav-link'><ScrollLink onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="blog">Blog</ScrollLink></li>
                        <li className='nav-link'><ScrollLink onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="joinus">Join Us</ScrollLink></li>
                        <li className='nav-link'><ScrollLink onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="partners">Our Partners</ScrollLink></li>
                        <li className='nav-link'><ScrollLink onClick={(e) => {
                            e.preventDefault();
                            setShowDropdown(!showDropdown);
                        }} style={{ cursor: "pointer" }} smooth={true} duration={500} to="/newsletter">Newsletters</ScrollLink></li>
                        {
                            showDropdown && <div style={{ transition: ".2s all gap-1 linear" }}>
                                <li className='px-3'><ScrollLink>Previous</ScrollLink></li>
                                <li className='px-3'><ScrollLink>Latest</ScrollLink></li>
                                <li className='px-3'><ScrollLink>All Newsletters</ScrollLink></li>
                            </div>
                        }
                    </ul>
                    <div className="contact flex flex-col px-3 mt-5">
                        <span className='flex align-middle gap-3'>
                            <IconButton color='inherit'>
                                <Mail />
                            </IconButton>
                            <strong className='flex items-center'>pukaarsanstha@gmail.com</strong>
                        </span>
                        <span className='flex align-middle gap-3'>
                            <IconButton color='inherit'>
                                <Call />
                            </IconButton>
                            <strong className='flex items-center'>+91 9873504123</strong>
                        </span>
                    </div>
                </div>
            </nav>

            <nav style={{ zIndex: "999" }} className={`${fixed ? 'showThis' : ''} secondary hidden lg:flex justify-between items-start pt-8 h-28 px-6`}>
                <div className="">
                    <img src={logo2} style={{ height: "100px", position: "absolute", top: "-3px" }} alt="" />
                </div>
                <div className="flex gap-3 items-center" style={{ color: "#6e1b2a" }}>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' to="about">About</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' to="blog">Blog</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' to="joinus">Join Us</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' to="partners">Our Partners</ScrollLink>
                    <NavLink to="/newsletter" className='nav-link-main'>Newsletters</NavLink>
                    <Button variant='outlined' color='inherit' sx={{ fontWeight: "600" }} onClick={handleDonateClick}>
                        Donate Now
                    </Button>
                </div>
            </nav>
        </>
    );
}
