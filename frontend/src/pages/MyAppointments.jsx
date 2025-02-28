import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import PaymentModal from "../components/PaymentModal";
import { useNavigate } from "react-router-dom"; // Import only useNavigate from react-router-dom
import { motion } from "framer-motion"; // Import motion from framer-motion directly, no renaming needed

const MyAppointments = () => {
    const months = [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split("_");
        return (
            dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
        );
    };

    const { backendUrl, token, getDoctorsData } = useContext(AppContext);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate for navigation

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

    useEffect(() => {
        if (token) {
            getUserAppointments();
        }
    }, [token]);

    const getUserAppointments = async () => {
        try {
            const { data } = await axios.get(backendUrl + "/api/user/appointments", {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (data.success) {
                setAppointments([...data.appointments].reverse());
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                backendUrl + "/api/user/cancel-appointment",
                { appointmentId },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (data.success) {
                toast.success(data.message);
                getUserAppointments();
                getDoctorsData();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const handlePayOnline = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                backendUrl + "/api/user/payment-esewa",
                { appointmentId },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (data.success) {
                setSelectedAppointmentId(appointmentId);
                setIsPaymentModalOpen(true);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const handleConfirmPayment = async () => {
        try {
            const { data } = await axios.post(
                backendUrl + "/api/user/verify-esewa",
                { appointmentId: selectedAppointmentId },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (data.success) {
                toast.success("Payment successful!");
                setIsPaymentModalOpen(false);
                getUserAppointments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <motion.div
            className="py-16 bg-gradient-to-b from-white via-blue-50 to-indigo-100 min-h-screen relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <div className="absolute inset-0 bg-pattern opacity-5"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-green-200 rounded-full opacity-40 animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-amber-200 rounded-full opacity-40 animate-float-delayed"></div>
            <div className="absolute top-1/3 right-1/5 w-6 h-6 bg-purple-200 rounded-full opacity-40 animate-float-longer"></div>

            <div className="absolute top-16 right-16 w-64 h-64 opacity-20 animate-rotate-slow">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-300">
                    <path fill="currentColor" d="M52.9,-75.2C67.6,-67.3,78.2,-51.6,83.1,-34.6C88,-17.7,87.3,0.4,81.1,15.6C75,30.8,63.4,43.1,50.3,53.8C37.2,64.5,22.6,73.6,5.3,78.1C-12,82.5,-31.9,82.3,-45.9,73.4C-59.8,64.5,-67.8,47,-73.8,29C-79.8,11,-83.7,-7.3,-79.5,-23.5C-75.2,-39.6,-62.8,-53.6,-48.1,-61.8C-33.5,-70,-16.7,-72.5,1.2,-74.2C19.1,-75.9,38.2,-77,52.9,-75.2Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="absolute bottom-16 left-16 w-48 h-48 opacity-20 animate-rotate-slow-reverse">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-300">
                    <path fill="currentColor" d="M42.7,-73.8C55.9,-67.7,67.9,-58,75.9,-45.1C83.9,-32.1,87.8,-16,87.8,-0.1C87.7,15.9,83.6,31.9,75.5,45.6C67.3,59.4,55.1,71,40.6,77.7C26.1,84.4,9.2,86.2,-6.9,83.8C-23,81.3,-38.4,74.6,-50.7,64.5C-63,54.4,-72.3,40.8,-78.9,25.7C-85.4,10.5,-89.2,-6.3,-85.6,-21.2C-82,-36.1,-71,-49.2,-57.4,-54.4C-43.8,-59.7,-27.5,-56.9,-13.2,-60C1.1,-63.1,14.2,-72.1,25.9,-75.2C37.6,-78.2,48.8,-75.4,42.7,-73.8Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent text-sm font-extrabold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4 inline-block bg-indigo-50 shadow-sm border border-indigo-100">Your Health Journey</span>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
                        <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
                            My Appointments
                        </span>
                        <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full opacity-70"></div>
                    </h1>

                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                        View and manage your scheduled appointments with ease—stay on top of your health care.
                    </p>
                </motion.div>

                <motion.div
                    className="mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {appointments.length === 0 ? (
                        <motion.div
                            className="bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100"
                            variants={fadeIn}
                        >
                            <svg className="w-16 h-16 text-indigo-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">No Appointments Yet</h3>
                            <p className="text-gray-600">You haven’t booked any appointments. Start by scheduling one with our specialists!</p>
                            <motion.button
                                onClick={() => navigate("/doctors")} // Navigate to Doctors.jsx
                                className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                Book an Appointment
                            </motion.button>
                        </motion.div>
                    ) : (
                        <div className="grid gap-6">
                            {appointments.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
                                    variants={fadeIn}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                                    <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 items-center relative z-10">
                                        <div className="w-32">
                                            <img
                                                className="w-full rounded-2xl bg-indigo-50 shadow-md"
                                                src={item.doctorData.image}
                                                alt={item.doctorData.name}
                                            />
                                        </div>
                                        <div className="flex-1 text-sm text-gray-600">
                                            <p className="text-lg font-semibold text-gray-900">
                                                {item.doctorData.name}
                                            </p>
                                            <p>{item.speciality}</p>
                                            <p className="text-gray-700 font-medium mt-1">Address:</p>
                                            <p className="text-xs">{item.doctorData.address.line1}</p>
                                            <p className="text-xs">{item.doctorData.address.line2}</p>
                                            <p className="text-sm mt-2 text-gray-700">
                                                <span className="font-medium">Date & Time:</span>
                                                {slotDateFormat(item.slotDate)} | {item.slotTime}
                                            </p>
                                        </div>
                                        <div className="hidden sm:block"></div>
                                        <div className="flex flex-col gap-2 justify-end">
                                            {!item.cancelled && item.payment && !item.isCompleted && (
                                                <motion.button
                                                    className="sm:min-w-48 py-2 px-4 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-md hover:bg-green-200 transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    Booked
                                                </motion.button>
                                            )}
                                            {!item.cancelled && !item.payment && !item.isCompleted && (
                                                <motion.button
                                                    onClick={() => handlePayOnline(item.id)}
                                                    className="text-sm text-stone-500 sm:min-w-48 py-2 px-4 bg-white border border-indigo-200 rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    Pay Online
                                                </motion.button>
                                            )}
                                            {!item.cancelled && !item.payment && !item.isCompleted && (
                                                <motion.button
                                                    onClick={() => cancelAppointment(item.id)}
                                                    className="text-sm text-stone-500 sm:min-w-48 py-2 px-4 bg-white border border-red-200 rounded-full hover:bg-red-50 hover:text-red-700 transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    Cancel Appointment
                                                </motion.button>
                                            )}
                                            {item.cancelled && !item.isCompleted && (
                                                <motion.button
                                                    className="sm:min-w-48 py-2 px-4 bg-red-100 text-red-700 rounded-full text-sm font-medium shadow-md hover:bg-red-200 transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    Appointment Cancelled
                                                </motion.button>
                                            )}
                                            {item.isCompleted && (
                                                <motion.button
                                                    className="sm:min-w-48 py-2 px-4 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-md hover:bg-green-200 transition-all duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    Completed
                                                </motion.button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>

                <PaymentModal
                    isOpen={isPaymentModalOpen}
                    onClose={() => setIsPaymentModalOpen(false)}
                    onConfirm={handleConfirmPayment}
                />
            </div>

            <div className="h-24"></div>

            <style jsx>{`
                .bg-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-8.8-7.2-16-16-16S8 31.2 8 40s7.2 16 16 16 16-7.2 16-16zm0 0c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zm-32 0c0-12.7 10.3-23 23-23s23 10.3 23 23-10.3 23-23 23-23-10.3-23-23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
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
        </motion.div>
    );
};

export default MyAppointments;