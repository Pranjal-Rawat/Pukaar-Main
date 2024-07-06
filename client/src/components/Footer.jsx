import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <footer className="background">
                <div className="links">
                    <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-phone"></i>
                    </Link>
                    <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links" target="_blank" rel="noopener noreferrer">
                        <i className="fa-regular fa-envelope"></i>
                    </Link>
                    <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube"></i>
                    </Link>
                    <Link to="https://www.instagram.com/projectpurkul?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="links" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>
                </div>
                <p className="textfoot">
                    Copyright &copy; 2024 www.pukaar.com All Rights Reserved
                </p>
            </footer>
        </div>
    )
}
