import React, { useState, useEffect, useRef } from 'react';
import logo from '../Assests/pukaarsans.jpg';
import logo2 from '../Assests/pukaarsans2.jpg';
import { Divider, IconButton } from '@mui/material';
import { Close, Menu, ArrowDropDown, Call, Mail, LocationCity } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {Button} from '@mui/material'
import './Nav.css';

export default function Nav() {
    const [showNav, setShowNav] = useState(false);
    const [fixed, setFixed] = useState(false);
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
                        <small className='text-gray-600'>You may reach us here</small>
                        <small className='font-bold text-slate-700 text-xs'>Harrawala Dehradun</small>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="icon">
                        <IconButton sx={{ background: "#010101", color: "#f3f3f3" }}>
                            <Mail />
                        </IconButton>
                    </div>
                    <div className="data flex flex-col gap-2">
                        <small className='text-gray-600'>You may reach us here</small>
                        <small className='font-bold text-slate-700 text-xs'>Harrawala Dehradun</small>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="icon">
                        <IconButton sx={{ background: "#010101", color: "#f3f3f3" }}>
                            <Call />
                        </IconButton>
                    </div>
                    <div className="data flex flex-col gap-2">
                        <small className='text-gray-600'>You may reach us here</small>
                        <small className='font-bold text-slate-700 text-xs'>Harrawala Dehradun</small>
                    </div>
                </div>
            </nav>
            <Divider />

            <nav className='hidden lg:flex justify-center w-full absolute' style={{ top: "100px" }} >
                <div className='flex px-52 py-4 rounded gap-8' style={{ background: "#6e1b2a", color: "#f1f1f1" }}>
                    <Link className='hover:text-white' to="/">Home</Link>
                    <Link className='hover' to="/join-us">Join Us</Link>
                    <Link className='hover' to="/about">About</Link>
                    <Link className='hover' to="/partners">Our Partners</Link>
                    <Link className='hover flex relative gap-2' to="/newsletter">Newsletter
                        <span>
                            <IconButton className='h-5 w-5' color='inherit'>
                                <ArrowDropDown />
                            </IconButton>
                        </span>
                    </Link>
                    <Link className='hover' to="/blog">Blog</Link>
                </div>
            </nav>

            <nav style={{ zIndex: "998" }} className="lg:hidden fixed top-0 w-full flex py-3 px-4 justify-between bg-white">
                <div className="logo">
                    <img src={logo2} style={{ height: "100px" }} alt="" />
                </div>
                <div className="flex items-center">
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
                        <li className='nav-link'><Link to="/">Home</Link></li>
                        <li className='nav-link'><Link to="/about">About</Link></li>
                        <li className='nav-link'><Link to="/blog">Blog</Link></li>
                        <li className='nav-link'><Link to="/join-us">Join Us</Link></li>
                        <li className='nav-link'><Link to="/partners">Our Partners</Link></li>
                        <li className='nav-link'><Link to="/newsletter">Newsletters</Link></li>
                    </ul>
                    <div className="contact flex flex-col px-3 mt-5">
                        <span className='flex align-middle gap-3'>
                            <IconButton color='inherit'>
                                <Mail />
                            </IconButton>
                            <strong className='flex items-center'>pukarhelpline@gmail.com</strong>
                        </span>
                        <span className='flex align-middle gap-3'>
                            <IconButton color='inherit'>
                                <Call />
                            </IconButton>
                            <strong className='flex items-center'>7017233256</strong>
                        </span>
                    </div>
                </div>
            </nav>

            <nav style={{ zIndex: "999" }} className={`${fixed ? 'showThis' : ''} secondary hidden lg:flex justify-between items-start pt-8 h-28 px-6`}>
                <div className="">
                    <img src={logo2} style={{ height: "100px", position: "absolute", top: "-3px" }} alt="" />
                </div>
                <div className="flex gap-3 items-center" style={{color:"#6e1b2a"}}>
                    <Link className='nav-link-main' to="/">Home</Link>
                    <Link className='nav-link-main' to="/about">About</Link>
                    <Link className='nav-link-main' to="/blog">Blog</Link>
                    <Link className='nav-link-main' to="/join-us">Join Us</Link>
                    <Link className='nav-link-main' to="/partners">Our Partners</Link>
                    <Link className='nav-link-main' to="/newsletter">Newsletters</Link>
                    <Button variant='outlined' color='inherit' sx={{ fontWeight: "600" }}>
                       Donate Now
                    </Button>
                </div>
            </nav>
        </>
    );
}
