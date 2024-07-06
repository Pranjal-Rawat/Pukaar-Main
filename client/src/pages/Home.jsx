import React from 'react';
import { Link } from 'react-router-dom';
import pukaarsans from '../Assests/pukaarsans.jpg'
import image from '../Assests/image.png' 
import Homeslide from '../Assests/Homeslide.mp4';
import Study from '../Assests/Study.jpg'
import location_icon from '../Assests/location_icon.png'
export default function Home() {
    return (
        <div>
            <section className="bodyimg" style={{backgroundImage:`url${image}`}}>
               

               

                <section className="background firstSection" id="Home">
                    <div className="boxmain">
                        <div className="firsthalf">
                            <p className="textbigmain">Empowering Communities for a Harmonious and Sustainable Future</p>
                            <p className="textsmallmain">
                                Welcome to Pukaar Sanstha, where our vision is to create a harmonious
                                and sustainable world where individuals and communities thrive through empowerment,
                                employment generation, sustainability, and eco-tourism.
                                Discover our mission, initiatives, and the positive impact
                                we're making both locally and globally.
                            </p>
                            <div className="buttons">
                                <Link to="joinus.html" className="btn2">Join Us</Link>
                            </div>
                        </div>
                        <div className="second">
                            <video src={Homeslide} className="imagee animated" autoPlay loop muted>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>

                <section className="secRight" id="Blog">
                    <div className="para">
                        <h2 className="secTag textbig">Blog</h2>
                        <p className="secsubTag textsmall">
                            individuals and communities through holistic approaches to education,
                            employment, and migration. We are committed to fostering self-reliance,
                            promoting sustainable livelihoods, and facilitating safe migration
                            for those seeking better opportunities.
                            <br />
                            Our Approach
                            Empowerment, Employment, Migration, and Sustainability
                            are the cornerstones of our approach. We provide access to education,
                            skills training, and resources, create employment opportunities, support safe migration,
                            and promote eco-friendly practices.
                            <br />
                            Our Programs
                            <br />
                            Education and Empowerment
                            <br />
                            Project Purkul
                            Apna Vidya Mandir
                            Gyanoday Vatika
                            Employment Generation
                        </p>
                    </div>
                    <div className="thumbnail">
                        <img src={Study} alt="pukarlogo" className="imgFluid animated" />
                    </div>
                </section>

                <section className="secLeft" id="Aboutus">
                    <div className="para">
                        <h2 className="secTag textbig">About Us</h2>
                        <p className="secsubTag textsmall">
                            <b><em>VISSION</em></b><br />
                            At Pukaar Sanstha, our vision is to create a harmonious
                            and sustainable world where individuals and communities
                            thrive through empowerment, employment generation,
                            sustainability, and eco-tourism. We believe these pillars are
                            essential for fostering positive, lasting change on both local and global scales.
                            <br /><br />
                            <b><em>MISSION</em></b><br />
                            Our mission is to create positive and lasting change
                            by empowering individuals and communities through holistic
                            approaches to education, employment, and migration.
                            We are committed to fostering self-reliance,
                            promoting sustainable livelihoods, and facilitating safe migration
                            for those seeking better opportunities.
                            <br /><br />
                            <b><em>APPROACH</em></b><br />
                            Empowerment, Employment, Migration, and Sustainability
                            are the cornerstones of our approach. We provide access
                            to education, skills training, and resources,
                            create employment opportunities, support safe migration,
                            and promote eco-friendly practices.
                        </p>
                    </div>
                    <div className="thumbnail">
                        <img src={pukaarsans} alt="pukarlogo" className="imgFluid animated" />
                    </div>
                </section>

                <div className="dis">
                    <h1>Disclaimer</h1>
                    <p>No third-party agency is working on behalf of Pukaar Sanstha
                        for any recruitment, trainings, camps, or other activities related to
                        Pukaar Sanstha. Please check/consult with Pukaar Sanstha directly
                        to get correct information or assistance.
                        Please beware of any unwarranted claims made by anyone
                        on our behalf. Kindly bring any such claims to our notice
                        for immediate attention and action.
                        <br />
                        Pukaar Sanstha doesn't charge any money from anyone for
                        these activities. If you come across any individual or
                        organization making a monetary demand in our name,
                        please bring it to our notice immediately at contact@pukaar.org.
                    </p>
                </div>

                <div className="loc">
                    <img className="locimg" src={location_icon} alt="locationImg" />
                    <p className="loctext">Purkul Village Uttarii Gaon, road, near Bhagwantpur, Dehradun, Uttarakhand 248009</p>
                </div>

                <section className="contact" id="Contact">
                    <h2>Contact Us</h2>
                    <form id="contactForm">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button className="btn1" type="submit">Send Message</button>
                    </form>
                </section>
            </section>
           
        </div>
    );
}
