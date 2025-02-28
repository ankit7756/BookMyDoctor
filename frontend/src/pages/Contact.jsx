// // import React from 'react'
// // import { assets } from '../assets/assets'

// // const Contact = () => {
// //     return (
// //         <div>

// //             <div className='text-center text-2xl pt-10 text-gray-500'>
// //                 <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
// //             </div>

// //             <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
// //                 <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

// //                 <div className='flex flex-col justify-center items-start gap-6'>
// //                     <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
// //                     <p className='text-gray-500'>54709, William Station <br />Suits 350, Washington, USA</p>
// //                     <p className='text-gray-500'>Tel. (415) 555-1032 <br />Email: prescripto@gmail.com</p>
// //                     <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
// //                     <p className='text-gray-500'>Learn more about our teams and job openings.</p>

// //                     <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
// //                 </div>
// //             </div>


// //         </div>
// //     )
// // }

// // export default Contact

// import React from "react";
// import { assets } from "../assets/assets";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for potential navigation

// const Contact = () => {
//     const fadeIn = {
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.6 }
//         }
//     };

//     const staggerContainer = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2
//             }
//         }
//     };

//     const navigate = useNavigate(); // Add useNavigate for potential navigation (e.g., Explore Jobs button)

//     return (
//         <div className="py-16 bg-gradient-to-b from-white via-slate-50 to-blue-100 min-h-screen relative overflow-hidden">
//             {/* Background Elements - More sophisticated and subtle */}
//             <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
//             <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500/20 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

//             {/* Floating Elements */}
//             <div className="hidden md:block">
//                 <div className="absolute left-1/4 top-1/3 w-8 h-8 bg-amber-200 rounded-full opacity-30 animate-float"></div>
//                 <div className="absolute right-1/4 bottom-1/4 w-10 h-10 bg-sky-200 rounded-full opacity-30 animate-float-delayed"></div>
//                 <div className="absolute right-1/3 top-1/5 w-12 h-12 bg-purple-200 rounded-full opacity-30 animate-float-longer"></div>

//                 <div className="absolute top-24 right-12 w-48 h-48">
//                     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-100 opacity-40 animate-rotate-slow">
//                         <path fill="currentColor" d="M44.5,-76.3C58.1,-69.3,70.1,-58.4,79.2,-44.7C88.3,-31,94.5,-15.5,94.9,0.2C95.3,16,90,32,80.4,44.4C70.9,56.8,57.2,65.7,42.6,73.1C28,80.5,14,86.4,-0.3,87C-14.5,87.5,-29.1,82.6,-42.6,75.1C-56.1,67.5,-68.6,57.3,-77.4,44C-86.3,30.6,-91.5,15.3,-90.7,0.5C-89.9,-14.3,-83.1,-28.5,-74.2,-41.2C-65.2,-53.8,-54.1,-64.7,-41.2,-72.2C-28.3,-79.6,-14.1,-83.5,0.6,-84.5C15.4,-85.4,30.8,-83.4,44.5,-76.3Z" transform="translate(100 100)" />
//                     </svg>
//                 </div>
//                 <div className="absolute bottom-24 left-12 w-40 h-40">
//                     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-100 opacity-40 animate-rotate-slow-reverse">
//                         <path fill="currentColor" d="M44,-73.4C59.2,-67.5,75.3,-59.3,82.8,-45.8C90.2,-32.3,88.9,-13.4,85.1,4.4C81.3,22.2,75,38.8,64.3,50.9C53.7,63,38.7,70.5,23.1,76.3C7.5,82.1,-8.6,86.2,-24.2,83.2C-39.7,80.2,-54.6,70.1,-66.4,57C-78.2,43.8,-86.9,27.5,-88.8,10.4C-90.7,-6.8,-85.9,-24.9,-76.7,-40C-67.5,-55.1,-53.9,-67.3,-38.9,-73.5C-23.9,-79.7,-12,-79.9,1.3,-82.1C14.5,-84.2,28.9,-79.3,44,-73.4Z" transform="translate(100 100)" />
//                     </svg>
//                 </div>
//             </div>

//             <div className="container mx-auto px-4 relative z-10">
//                 {/* Contact Us Header - More elegant styling */}
//                 <motion.div
//                     className="text-center mb-16"
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeIn}
//                 >
//                     <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase bg-indigo-100 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">Get In Touch</span>

//                     <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 relative inline-block">
//                         Contact Us
//                         <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"></div>
//                     </h1>

//                     <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-6">
//                         Reach out to BookMyDoctor for support, inquiries, or career opportunities.
//                     </p>
//                 </motion.div>

//                 {/* Contact Content - Refined layout and card-like appearance */}
//                 <motion.div
//                     className="flex flex-col md:flex-row gap-12 mb-20"
//                     initial="hidden"
//                     animate="visible"
//                     variants={staggerContainer}
//                 >
//                     <motion.div
//                         className="w-full md:w-2/5 lg:w-1/3"
//                         variants={fadeIn}
//                     >
//                         <div className="relative group">
//                             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
//                             <div className="relative">
//                                 <img
//                                     className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                                     src={assets.contact_image}
//                                     alt="Contact Us"
//                                 />
//                                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
//                                 <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <p className="text-sm font-medium">Our Location</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         className="w-full md:w-3/5 lg:w-2/3 flex flex-col justify-center gap-8"
//                         variants={fadeIn}
//                     >
//                         <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
//                             <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                                 <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                 </svg>
//                                 Our Office
//                             </h3>
//                             <p className="text-gray-600 mb-4">54709, William Station, Suite 350, Washington, USA</p>
//                             <p className="text-gray-600 mb-4">Tel. (415) 555-1032 <br /> Email: bookmydoctor@gmail.com</p>
//                         </div>

//                         <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
//                             <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
//                                 <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                                 </svg>
//                                 Careers at BookMyDoctor
//                             </h3>
//                             <p className="text-gray-600 mb-4">Learn more about our teams and job openings.</p>
//                             <button
//                                 onClick={() => navigate("/careers")} // Example navigation (optional, adjust as needed)
//                                 className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                             >
//                                 Explore Jobs
//                             </button>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             </div>

//             {/* Spacer for Footer */}
//             <div className="h-24"></div>

//             <style jsx>{`
//                 .bg-grid-pattern {
//                     background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
//                 }

//                 @keyframes fade-in {
//                     0% { opacity: 0; transform: translateY(20px); }
//                     100% { opacity: 1; transform: translateY(0); }
//                 }

//                 @keyframes pulse-slow {
//                     0% { transform: scale(1); opacity: 0.3; }
//                     50% { transform: scale(1.05); opacity: 0.5; }
//                     100% { transform: scale(1); opacity: 0.3; }
//                 }

//                 @keyframes float {
//                     0% { transform: translateY(0px); }
//                     50% { transform: translateY(-15px); }
//                     100% { transform: translateY(0px); }
//                 }

//                 @keyframes float-delayed {
//                     0% { transform: translateY(0px); }
//                     50% { transform: translateY(-15px); }
//                     100% { transform: translateY(0px); }
//                 }

//                 @keyframes float-longer {
//                     0% { transform: translateY(0px); }
//                     50% { transform: translateY(-20px); }
//                     100% { transform: translateY(0px); }
//                 }

//                 @keyframes rotate-slow {
//                     0% { transform: rotate(0deg); }
//                     100% { transform: rotate(360deg); }
//                 }

//                 @keyframes rotate-slow-reverse {
//                     0% { transform: rotate(0deg); }
//                     100% { transform: rotate(-360deg); }
//                 }

//                 .animate-float {
//                     animation: float 6s ease-in-out infinite;
//                 }

//                 .animate-float-delayed {
//                     animation: float-delayed 7s ease-in-out infinite;
//                     animation-delay: 2s;
//                 }

//                 .animate-float-longer {
//                     animation: float-longer 8s ease-in-out infinite;
//                     animation-delay: 1s;
//                 }

//                 .animate-rotate-slow {
//                     animation: rotate-slow 30s linear infinite;
//                 }

//                 .animate-rotate-slow-reverse {
//                     animation: rotate-slow-reverse 25s linear infinite;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Contact;

import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Keep useNavigate for potential future use, but won’t use it for Explore Jobs

const Contact = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const navigate = useNavigate();

    return (
        <div className="py-16 bg-gradient-to-b from-white via-slate-50 to-blue-100 min-h-screen relative overflow-hidden">
            {/* Background Elements - More sophisticated and subtle */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500/20 to-transparent rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            {/* Floating Elements */}
            <div className="hidden md:block">
                <div className="absolute left-1/4 top-1/3 w-8 h-8 bg-amber-200 rounded-full opacity-30 animate-float"></div>
                <div className="absolute right-1/4 bottom-1/4 w-10 h-10 bg-sky-200 rounded-full opacity-30 animate-float-delayed"></div>
                <div className="absolute right-1/3 top-1/5 w-12 h-12 bg-purple-200 rounded-full opacity-30 animate-float-longer"></div>

                <div className="absolute top-24 right-12 w-48 h-48">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-100 opacity-40 animate-rotate-slow">
                        <path fill="currentColor" d="M44.5,-76.3C58.1,-69.3,70.1,-58.4,79.2,-44.7C88.3,-31,94.5,-15.5,94.9,0.2C95.3,16,90,32,80.4,44.4C70.9,56.8,57.2,65.7,42.6,73.1C28,80.5,14,86.4,-0.3,87C-14.5,87.5,-29.1,82.6,-42.6,75.1C-56.1,67.5,-68.6,57.3,-77.4,44C-86.3,30.6,-91.5,15.3,-90.7,0.5C-89.9,-14.3,-83.1,-28.5,-74.2,-41.2C-65.2,-53.8,-54.1,-64.7,-41.2,-72.2C-28.3,-79.6,-14.1,-83.5,0.6,-84.5C15.4,-85.4,30.8,-83.4,44.5,-76.3Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="absolute bottom-24 left-12 w-40 h-40">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-100 opacity-40 animate-rotate-slow-reverse">
                        <path fill="currentColor" d="M44,-73.4C59.2,-67.5,75.3,-59.3,82.8,-45.8C90.2,-32.3,88.9,-13.4,85.1,4.4C81.3,22.2,75,38.8,64.3,50.9C53.7,63,38.7,70.5,23.1,76.3C7.5,82.1,-8.6,86.2,-24.2,83.2C-39.7,80.2,-54.6,70.1,-66.4,57C-78.2,43.8,-86.9,27.5,-88.8,10.4C-90.7,-6.8,-85.9,-24.9,-76.7,-40C-67.5,-55.1,-53.9,-67.3,-38.9,-73.5C-23.9,-79.7,-12,-79.9,1.3,-82.1C14.5,-84.2,28.9,-79.3,44,-73.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase bg-indigo-100 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">Get In Touch</span>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 relative inline-block">
                        Contact Us
                        <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"></div>
                    </h1>

                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                        Reach out to BookMyDoctor for support, inquiries, or career opportunities.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row gap-12 mb-20"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div
                        className="w-full md:w-2/5 lg:w-1/3"
                        variants={fadeIn}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                            <div className="relative">
                                <img
                                    className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    src={assets.contact_image}
                                    alt="Contact Us"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm font-medium">Our Location</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-3/5 lg:w-2/3 flex flex-col gap-8"
                        variants={fadeIn}
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                Our Office
                            </h3>
                            <p className="text-gray-600 mb-4">54709, William Station, Suite 350, Washington, USA</p>
                            <p className="text-gray-600 mb-4">Tel. (415) 555-1032 <br /> Email: bookmydoctor@gmail.com</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                24/7 Support
                            </h3>
                            <p className="text-gray-600 mb-4">We’re here for you around the clock. Contact us anytime—day or night—for assistance or urgent health care queries.</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                                Careers at BookMyDoctor
                            </h3>
                            <p className="text-gray-600 mb-4">Learn more about our teams and job openings.</p>
                            <button
                                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                Explore Jobs
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="h-24"></div>

            <style jsx>{`
                .bg-grid-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
                
                @keyframes fade-in {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                @keyframes pulse-slow {
                    0% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.05); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 0.3; }
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
                
                @keyframes float-longer {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
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

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 7s ease-in-out infinite;
                    animation-delay: 2s;
                }
                
                .animate-float-longer {
                    animation: float-longer 8s ease-in-out infinite;
                    animation-delay: 1s;
                }
                
                .animate-rotate-slow {
                    animation: rotate-slow 30s linear infinite;
                }
                
                .animate-rotate-slow-reverse {
                    animation: rotate-slow-reverse 25s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Contact;