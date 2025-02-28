import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
    return (
        <div className="mt-16 pt-8 pb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-teal-50 to-blue-100 -z-10"></div>
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-teal-500/15 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-112 h-112 rounded-full bg-blue-500/15 translate-x-1/3 translate-y-1/3 -z-10 animate-pulse-slow-delayed"></div>

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 particle-container">
                    <div className="particle animate-particle"></div>
                    <div className="particle animate-particle delay-1000"></div>
                    <div className="particle animate-particle delay-2000"></div>
                    <div className="particle animate-particle delay-3000"></div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 animate-fade-in">
                            <span className="text-teal-600">Healthcare</span> Made
                            <span className="relative inline-block ml-4">
                                Simple
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                                    <path d="M0,5 Q50,15 100,5" stroke="#2D9CDB" strokeWidth="5" fill="none" className="animate-glow" />
                                </svg>
                            </span>
                            <div className="absolute -bottom-8 left-0 w-full h-2 bg-gradient-to-r from-teal-500/20 to-blue-800/20 rounded-full"></div>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 font-light animate-fade-in delay-300">
                            Connect with trusted healthcare professionals and book appointments in a single click.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <a
                                href="#speciality"
                                className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 transition-colors text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-teal-500/40 transform hover:scale-105"
                            >
                                Find a Doctor
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>

                            <a
                                href="https://youtu.be/iXbq6A_Tqxc?si=6n-D7_aXVT59JXu3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors text-gray-800 px-6 py-4 rounded-xl font-medium border border-gray-200 shadow-sm hover:shadow-md transform hover:scale-105"
                            >
                                How It Works
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        <div className="pt-8">
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="flex -space-x-4">
                                    <img
                                        className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md animate-fade-in delay-600"
                                        src={assets.elon}
                                        alt="User"
                                    />
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-teal-100 flex items-center justify-center text-teal-600 font-bold shadow-md animate-fade-in delay-600">
                                        20k+
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-600 animate-fade-in delay-600">Trusted by <span className="font-semibold text-teal-600">20,000+</span> patients</p>
                                    <div className="flex items-center mt-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg
                                                key={star}
                                                className="w-4 h-4 text-yellow-400 hover:text-yellow-500 transition-colors animate-pulse-slow"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        ))}
                                        <span className="ml-1 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors animate-fade-in delay-600">4.9/5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-full h-full bg-teal-500/15 rounded-3xl"></div>
                            <img
                                className="w-full h-auto relative rounded-3xl shadow-2xl transform scale-100 hover:scale-102 transition-transform duration-500 perspective-500 hover:rotate-x-2 hover:rotate-y-2"
                                src={assets.grpDoctors}
                                alt="Healthcare professionals"
                            />

                            <div className="absolute -top-8 -left-8 bg-white rounded-xl shadow-2xl p-5 flex items-center gap-4 animate-float transform rotate-3">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600">Verified Doctors</p>
                                    <p className="text-base font-semibold text-teal-600">100% Certified</p>
                                </div>
                            </div>

                            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-2xl p-5 flex items-center gap-4 animate-float-delayed transform -rotate-3">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 animate-pulse-slow-delayed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600">Quick Booking</p>
                                    <p className="text-base font-semibold text-teal-600">Save 70% Time</p>
                                </div>
                            </div>

                            <svg className="absolute -top-12 -right-12 w-24 h-24 text-teal-500/20 -z-5 animate-rotate-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L12 22M2 12L22 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                
                @keyframes float-delayed {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                
                @keyframes pulse-slow {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                
                @keyframes pulse-slow-delayed {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                
                @keyframes particle {
                    0% { opacity: 0; transform: scale(0) translate(-50%, -50%); }
                    50% { opacity: 1; transform: scale(1) translate(-50%, -50%); }
                    100% { opacity: 0; transform: scale(0) translate(-50%, -50%); }
                }
                
                @keyframes glow {
                    0% { stroke: #2D9CDB; }
                    50% { stroke: #1A3C5A; }
                    100% { stroke: #2D9CDB; }
                }
                
                @keyframes rotate-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .animate-fade-in {
                    animation: fade-in 1.5s ease-out;
                }

                .animate-fade-in.delay-300 {
                    animation-delay: 0.3s;
                }

                .animate-fade-in.delay-600 {
                    animation-delay: 0.6s;
                }

                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 5s ease-in-out infinite;
                    animation-delay: 2.5s;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                
                .animate-pulse-slow-delayed {
                    animation: pulse-slow-delayed 4s ease-in-out infinite;
                    animation-delay: 2s;
                }
                
                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                }
                
                .animate-rotate-slow {
                    animation: rotate-slow 20s linear infinite;
                }
                
                .particle-container {
                    position: absolute;
                    inset: 0;
                }
                
                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(45, 156, 219, 0.5);
                    border-radius: 50%;
                    animation: particle 3s linear infinite;
                }
                
                .particle:nth-child(1) { top: 20%; left: 30%; }
                .particle:nth-child(2) { top: 60%; left: 70%; }
                .particle:nth-child(3) { top: 40%; left: 20%; }
                .particle:nth-child(4) { top: 80%; left: 50%; }
                
                .delay-1000 { animation-delay: 1s; }
                .delay-2000 { animation-delay: 2s; }
                .delay-3000 { animation-delay: 3s; }
            `}</style>
        </div>
    );
};

export default Header;