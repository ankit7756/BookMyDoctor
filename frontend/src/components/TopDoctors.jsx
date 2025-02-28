import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse-slow-delayed"></div>
            <div className="absolute left-1/3 top-1/4 w-10 h-10 bg-amber-100 rounded-full opacity-40 animate-float"></div>
            <div className="absolute right-1/3 bottom-1/3 w-14 h-14 bg-sky-100 rounded-full opacity-40 animate-float-delayed"></div>

            <div className="absolute top-20 right-10 w-40 h-40">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-100 opacity-50 animate-rotate-slow">
                    <path fill="currentColor" d="M44.5,-76.3C58.1,-69.3,70.1,-58.4,79.2,-44.7C88.3,-31,94.5,-15.5,94.9,0.2C95.3,16,90,32,80.4,44.4C70.9,56.8,57.2,65.7,42.6,73.1C28,80.5,14,86.4,-0.3,87C-14.5,87.5,-29.1,82.6,-42.6,75.1C-56.1,67.5,-68.6,57.3,-77.4,44C-86.3,30.6,-91.5,15.3,-90.7,0.5C-89.9,-14.3,-83.1,-28.5,-74.2,-41.2C-65.2,-53.8,-54.1,-64.7,-41.2,-72.2C-28.3,-79.6,-14.1,-83.5,0.6,-84.5C15.4,-85.4,30.8,-83.4,44.5,-76.3Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="absolute bottom-20 left-10 w-32 h-32">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-100 opacity-50 animate-rotate-slow-reverse">
                    <path fill="currentColor" d="M44,-73.4C59.2,-67.5,75.3,-59.3,82.8,-45.8C90.2,-32.3,88.9,-13.4,85.1,4.4C81.3,22.2,75,38.8,64.3,50.9C53.7,63,38.7,70.5,23.1,76.3C7.5,82.1,-8.6,86.2,-24.2,83.2C-39.7,80.2,-54.6,70.1,-66.4,57C-78.2,43.8,-86.9,27.5,-88.8,10.4C-90.7,-6.8,-85.9,-24.9,-76.7,-40C-67.5,-55.1,-53.9,-67.3,-38.9,-73.5C-23.9,-79.7,-12,-79.9,1.3,-82.1C14.5,-84.2,28.9,-79.3,44,-73.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 relative">
                    <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase bg-indigo-100 px-3 py-1 rounded-full mb-3 inline-block animate-fade-in">Expert Healthcare</span>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block animate-fade-in">
                        Meet Our Top Doctors
                        <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"></div>
                    </h2>

                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4 animate-fade-in delay-300">
                        Benefit from the expertise of our highly-rated medical professionals specializing in various fields of medicine
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {doctors?.slice(0, 8).map((doctor, index) => (
                        <div
                            key={doctor.id || index}
                            className="relative group"
                            onMouseEnter={() => setHoveredCard(doctor.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                onClick={() => {
                                    navigate(`/appointment/${doctor.id}`);
                                    window.scrollTo(0, 0);
                                }}
                                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform ${hoveredCard === doctor.id ? 'scale-105 rotate-x-2 rotate-y-2' : 'scale-100 rotate-0'
                                    } perspective-1000 animate-fade-in delay-300 border border-gray-100 group relative z-10`}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                                    <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg z-30 transition-all duration-300 ${doctor.available
                                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                                        : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                                        }`}>
                                        <span className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-white animate-pulse' : 'bg-white opacity-50'}`}></span>
                                        {doctor.available ? 'Available Now' : 'Not Available'}
                                    </div>
                                </div>

                                <div className="p-6 relative">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
                                        {doctor.name}
                                    </h3>

                                    <div className="flex items-center mb-4">
                                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full shadow-sm">
                                            {doctor.speciality}
                                        </span>

                                        {doctor.rating && (
                                            <div className="flex items-center ml-auto">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="ml-1 text-xs font-medium text-gray-600">{doctor.rating || "4.9"}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2 mb-5">
                                        {doctor.experience && (
                                            <div className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="font-medium text-gray-700">Experience:</span>
                                                <span className="ml-1">{doctor.experience}</span>
                                            </div>
                                        )}

                                        {doctor.location && (
                                            <div className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="line-clamp-1">{doctor.location}</span>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/appointment/${doctor.id}`);
                                            window.scrollTo(0, 0);
                                        }}
                                        className="w-full py-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-blue-600"
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            </div>

                            <div className={`absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 via-indigo-400/20 to-blue-400/20 blur-xl opacity-0 ${hoveredCard === doctor.id ? 'opacity-40' : 'opacity-0'} transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button
                        onClick={() => {
                            navigate("/doctors");
                            window.scrollTo(0, 0);
                        }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-indigo-500 text-indigo-600 rounded-xl font-medium shadow-md hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 transform hover:scale-105 relative group overflow-hidden"
                    >
                        <span className="relative z-10">View All Specialists</span>
                        <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </button>
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
                
                @keyframes rotate-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes rotate-slow-reverse {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(-360deg); }
                }

                .animate-fade-in {
                    animation: fade-in 1.5s ease-out;
                }

                .animate-fade-in.delay-300 {
                    animation-delay: 0.3s;
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
                
                .animate-rotate-slow {
                    animation: rotate-slow 25s linear infinite;
                }
                
                .animate-rotate-slow-reverse {
                    animation: rotate-slow-reverse 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default TopDoctors;