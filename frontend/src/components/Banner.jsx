import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="py-24 relative overflow-hidden bg-gradient-to-b from-teal-50 to-blue-50">
            <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse-slow-delayed"></div>
            <div className="absolute left-1/4 top-1/3 w-12 h-12 bg-teal-100 rounded-full opacity-30 animate-float"></div>
            <div className="absolute right-1/4 bottom-1/4 w-16 h-16 bg-blue-100 rounded-full opacity-40 animate-float-delayed"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 animate-fade-in">
                            <span className="text-teal-600">Book Now</span> with
                            <br />Trusted Experts
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 mt-4 max-w-lg mx-auto md:mx-0 animate-fade-in delay-300">
                            Connect with over 100 certified doctors—schedule your appointment effortlessly today.
                        </p>
                        <button
                            onClick={() => {
                                navigate("/login");
                                window.scrollTo(0, 0);
                            }}
                            className="mt-8 bg-white text-teal-600 px-8 py-3 rounded-xl font-medium border border-teal-500 shadow-md hover:bg-teal-50 hover:text-teal-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in delay-600"
                        >
                            Create Account
                        </button>
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        <div className="relative w-full max-w-md mx-auto md:mx-0">
                            <img
                                className="w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in delay-600"
                                src={assets.appointment_img}
                                alt="Appointment Illustration"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent rounded-2xl opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
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

                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }

                @keyframes float-delayed {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
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

                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                
                .animate-pulse-slow-delayed {
                    animation: pulse-slow-delayed 4s ease-in-out infinite;
                    animation-delay: 2s;
                }

                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 5s ease-in-out infinite;
                    animation-delay: 2.5s;
                }
            `}</style>
        </div>
    );
};

export default Banner;