import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import pukaarsans from '../Assests/pukaarsans.jpg'
import image from '../Assests/image.png' 
import Homeslide from '../Assests/Homeslide.mp4';
import Study from '../Assests/Study.jpg'
import location_icon from '../Assests/location_icon.png'
export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar background">
                    <div className="logo">
                        <img src={pukaarsans} alt="logo" />
                    </div>
                    <ul className="navlist" id="navlist">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#Blog">Blog</Link></li>
                        <li><Link to="#Aboutus">About us</Link></li>
                        <li><Link to="#Contact">Contact us</Link></li>
                        <li><Link to="newsletter.html">Newsletter</Link></li>
                        <li><Link to="partners.html">Our Partners</Link></li>
                        <li><Link to="/joinus">Join Us</Link></li>
                    </ul>
                    <div className="burger" id="burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <button className="btn" id="donateBtn">Donate</button>
                </nav>
                <div id="sideNav" className="side-nav">
                    <Link to="javascript:void(0)" className="closebtn" id="closeBtn">&times;</Link>
                    <Link to="#Home" className="sideNavLink">Home</Link>
                    <Link to="#Blog" className="sideNavLink">Blog</Link>
                    <Link to="#Aboutus" className="sideNavLink">About us</Link>
                    <Link to="#Contact" className="sideNavLink">Contact us</Link>
                    <Link to="newsletter.html" className="sideNavLink">Newsletter</Link>
                    <Link to="partners.html" className="sideNavLink">Our Partners</Link>
                    <Link to="joinus.html" className="sideNavLink">Join Us</Link>
                    <div className="side-nav-links">
                        <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links"><i className="fa-solid fa-phone"></i></Link>
                        <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links"><i className="fa-brands fa-instagram"></i></Link>
                        <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links"><i className="fa-brands fa-facebook"></i></Link>
                        <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links"><i className="fa-regular fa-envelope"></i></Link>
                        <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links"><i className="fa-brands fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
        )
    }
}
