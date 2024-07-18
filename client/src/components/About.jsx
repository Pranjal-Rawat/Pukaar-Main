import React from 'react';
import backgroundImg from '../Assests/image.png';
export default function Hero() {
    return (
        <div id='about'>
            <section className="relative ">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div className="absolute top-0 w-full h-full bg-center " style={{
                        backgroundColor: "#fff"
                    }}>
                        <span id="" className="w-full h-full absolute "></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="">
                                    <p className='font-bold lg:text-4xl text-3xl px-5 hero-text' style={{ color: "#6e1b2a" }}>
                                        About Us
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section className="pb-10 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Vision</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            At Pukaar Sanstha, our vision is to create a harmonious and sustainable world where individuals and communities thrive through empowerment, employment generation, sustainability, and eco-tourism. We believe these pillars are essential for fostering positive, lasting change on both local and global scales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-blue-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-info"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Mission</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Our mission is to create positive and lasting change by empowering individuals and communities through holistic approaches to education, employment, and migration. We are committed to fostering self-reliance, promoting sustainable livelihoods, and facilitating safe migration for those seeking better opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Approch</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Empowerment, Employment, Migration, and Sustainability are the cornerstones of our approach. We provide access to education, skills training, and resources, create employment opportunities, support safe migration, and promote eco-friendly practices. Also we follow user-freindly methods and have a healthu working enviornment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </div>
        <div></div>
    );
}
