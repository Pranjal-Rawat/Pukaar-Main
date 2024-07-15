import React, { useState, useEffect, useRef } from 'react';
import logo from '../Assests/pukaarsans.jpg';
import logo2 from '../Assests/pukaarsans2.jpg';
import { Divider, IconButton, Button } from '@mui/material';
import { Close, Menu, ArrowDropDown, Call, Mail, LocationCity, ArrowUpward, ArrowDropUp } from '@mui/icons-material';
import { Link as Link } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom'
import Modal from 'react-modal'; // Import Modal from react-modal
import './Nav.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

export default function Nav() {
    const [showNav, setShowNav] = useState(false);
    const [fixed, setFixed] = useState(false);
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const navRef = useRef(null);

    const [donationAmount, setDonationAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDonation = (amount) => {
        setDonationAmount(amount);
        setCustomAmount(''); // Clear custom amount when preset amount is selected
    };

    const handleCustomAmountChange = (event) => {
        setCustomAmount(event.target.value);
        setDonationAmount(''); // Clear preset amount when custom amount is entered
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle donation submission logic here
        console.log(`Donating ${donationAmount || customAmount}`);
        // Optionally, close modal after submission
        closeModal();
    };


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
        setShowModal(true); // Open the modal when Donate Now is clicked
    };

    const closeModal = () => {
        setShowModal(false); // Close the modal
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
                        <small className='font-bold text-slate-700 text-xs'><a href="https://www.google.com/maps/dir/?api=1&destination=Salan%20Gaon,%20Bhagwant%20Pur,%20Brahman%20Gaon,%20Uttarakhand%20248001,%20India">Purkul Village, Dehradun</a></small>
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
                        <small className='font-bold text-slate-700 text-xs'>+91 91490 23810</small>
                    </div>
                </div>
            </nav>
            <Divider />

            <nav className='hidden lg:flex justify-center w-full absolute' style={{ top: "100px" }} >
                <div className='flex px-52 py-4 rounded gap-8' style={{ background: "#6e1b2a", color: "#f1f1f1" }}>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='hover:text-white' >Home</Link>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='hover' to="joinus">Join Us</Link>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='hover' to="about">About</Link>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='hover' to="partners">Our Partners</Link>
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
                            <Link to='/'>Latest </Link>
                            <Link to='/'>Previous </Link>
                            <Link to='/'>All Newsletter</Link>
                        </div>
                    </NavLink>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='hover' to="blog">Blog</Link>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='hover' onClick={handleDonateClick}>Donate Now</Link>

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
                        <li className='nav-link'><Link onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="/">Home</Link></li>
                        <li className='nav-link'><Link onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="about">About</Link></li>
                        <li className='nav-link'><Link onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="blog">Blog</Link></li>
                        <li className='nav-link'><Link onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="joinus">Join Us</Link></li>
                        <li className='nav-link'><Link onClick={() => setShowNav(false)} style={{ cursor: "pointer" }} smooth={true} duration={500} to="partners">Our Partners</Link></li>
                        <li className='nav-link'><Link onClick={(e) => {
                            e.preventDefault();
                            setShowDropdown(!showDropdown);
                        }} style={{ cursor: "pointer" }} smooth={true} duration={500} to="/newsletter">Newsletters</Link></li>
                        {
                            showDropdown && <div style={{transition:".2s all gap-1 linear"}}>
                                <li className='px-3'><Link>Previous</Link></li>
                                <li className='px-3'><Link>Latest</Link></li>
                                <li className='px-3'><Link>All Newsletters</Link></li>
                            </div>
                        }
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
                <div className="flex gap-3 items-center" style={{ color: "#6e1b2a" }}>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' to="about">About</Link>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' to="blog">Blog</Link>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' to="joinus">Join Us</Link>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' to="partners">Our Partners</Link>
                    <Link style={{ cursor: "pointer" }} smooth={true} duration={500} className='nav-link-main' to="/newsletter">Newsletters</Link>

                    <Button variant='outlined' color='inherit' sx={{ fontWeight: "600" }} onClick={handleDonateClick}>
                        Donate Now
                    </Button>
                </div>
            </nav>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                overlayClassName="overlay"
                className="fixed h-96 top-32 modal w-full bg-white"
            >
                <div className="modal-content p-6">
                    <h2>Donate Now</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4 mt-4">
                            {/* Preset donation amounts */}
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="donation"
                                        value="100"
                                        checked={donationAmount === '100'}
                                        onChange={() => handleDonation('100')}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">$100</span>
                                </label>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="donation"
                                        value="200"
                                        checked={donationAmount === '200'}
                                        onChange={() => handleDonation('200')}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">$200</span>
                                </label>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="donation"
                                        value="500"
                                        checked={donationAmount === '500'}
                                        onChange={() => handleDonation('500')}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">$500</span>
                                </label>
                            </div>
                            {/* Custom donation amount */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter custom amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="form-input w-full"
                                />
                            </div>
                            {/* Submit button */}
                            <div className="flex justify-end">
                                <Button type="submit" variant="contained" color="primary">Donate</Button>
                                <Button onClick={closeModal} className="ml-2">Close</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>

        </>
    );
}
