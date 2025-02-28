import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";

const Appointment = () => {
    const { docId } = useParams();
    const { doctors, currencySymbol, backendUrl, token, getDoctorsData } =
        useContext(AppContext);
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState("");
    const navigate = useNavigate();
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

    const scaleUp = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    useEffect(() => {
        if (docId && doctors.length > 0) {
            fetchDocInfo();
        }
    }, [docId, doctors]);

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc.id === parseInt(docId));
        setDocInfo(docInfo);
        console.log(docInfo);
    };

    useEffect(() => {
        if (docInfo) {
            getAvailableSlots();
        }
    }, [docInfo]);

    const getAvailableSlots = async () => {
        setDocSlots([]);
        if (!docInfo) {
            console.error("Doctor information not available");
            // return;
        }

        let today = new Date();

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(
                    currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
                );
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });

                let day = currentDate.getDate();
                let month = currentDate.getMonth() + 1;
                let year = currentDate.getFullYear();
                const slotDate = day + "_" + month + "_" + year;
                const slotTime = formattedTime;
                const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true;
                if (isSlotAvailable) {
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime,
                    });
                }

                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDocSlots((prev) => [...prev, timeSlots]);
        }
    };

    const bookAppointment = async () => {
        if (!token) {
            toast.warn("Please Login to book appointment");
            return navigate("/login");
        }
        try {
            const date = docSlots[slotIndex][0].datetime;
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            const slotDate = day + "_" + month + "_" + year;
            const { data } = await axios.post(
                backendUrl + "/api/user/book-appointment",
                { docId, slotDate, slotTime },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (data.success) {
                toast.success(data.message);
                getDoctorsData();
                navigate("/my-appointments");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
    }, [docSlots]);

    return (
        docInfo && (
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
                        <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent text-sm font-extrabold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4 inline-block bg-indigo-50 shadow-sm border border-indigo-100">Book Your Appointment</span>

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
                            <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
                                Schedule with {docInfo.name}
                            </span>
                            <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full opacity-70"></div>
                        </h1>

                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                            Take the first step towards better health — secure your consultation with our certified specialist today.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col lg:flex-row gap-8 mb-16"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="w-full lg:w-1/3"
                            variants={scaleUp}
                        >
                            <div className="group relative rounded-3xl overflow-hidden shadow-xl">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition-all duration-500"></div>

                                <div className="relative rounded-3xl overflow-hidden aspect-square">
                                    <img
                                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        src={docInfo.image}
                                        alt={docInfo.name}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="text-white">
                                            <div className="flex items-center gap-2 mb-2">
                                                <img className="w-5" src={assets.verified_icon} alt="Verified" />
                                                <p className="text-sm font-medium">Verified Healthcare Professional</p>
                                            </div>
                                            <h3 className="text-xl font-bold truncate">{docInfo.name}</h3>
                                            <p className="text-sm opacity-90">{docInfo.speciality}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Highly Rated</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{docInfo.experience}</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span>Private Practice</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="w-full lg:w-2/3"
                            variants={scaleUp}
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-full opacity-30 -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-full opacity-30 -ml-20 -mb-20"></div>

                                <div className="relative">
                                    <div className="mb-6">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-1">{docInfo.name}</h2>
                                        <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
                                            <span className="font-semibold text-indigo-600">{docInfo.degree}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                            <span>{docInfo.speciality}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                            <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md text-xs font-medium">
                                                {docInfo.experience}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            About Doctor
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                                            {docInfo.about}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-indigo-50 p-4 rounded-xl">
                                            <h4 className="text-sm font-medium text-indigo-800 mb-1">Specialization</h4>
                                            <p className="text-indigo-900 font-semibold">{docInfo.speciality}</p>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-xl">
                                            <h4 className="text-sm font-medium text-purple-800 mb-1">Experience</h4>
                                            <p className="text-purple-900 font-semibold">{docInfo.experience}</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-xl">
                                            <h4 className="text-sm font-medium text-blue-800 mb-1">Consultation Fee</h4>
                                            <p className="text-blue-900 font-semibold">{currencySymbol}{docInfo.fees}</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center gap-4 flex-wrap">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>30 min consultation</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span>Online prescription</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Guaranteed satisfaction</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mb-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full opacity-30 -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 -ml-32 -mb-32"></div>

                        <div className="relative">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Choose Your Appointment Time
                            </h2>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                    Select Date
                                </h3>
                                <div className="flex gap-3 items-center overflow-x-auto pb-4 scrollbar-hide">
                                    {docSlots.length > 0 &&
                                        docSlots.map((item, index) => (
                                            <motion.div
                                                onClick={() => setSlotIndex(index)}
                                                className={`relative group cursor-pointer min-w-24 `}
                                                key={index}
                                                whileHover={{ scale: 1.03 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                                                <div className={`relative px-4 py-3 rounded-2xl text-center flex flex-col items-center justify-center transition-all duration-300 ${slotIndex === index
                                                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                                                    : "bg-white text-gray-800 border border-gray-200"
                                                    }`}>
                                                    <p className="font-bold">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                                    <p className="text-lg font-extrabold mt-1">{item[0] && item[0].datetime.getDate()}</p>
                                                    <p className="text-xs mt-1 opacity-75">
                                                        {item[0] && new Intl.DateTimeFormat('en-US', { month: 'short' }).format(item[0].datetime)}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                    Select Time
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                    {docSlots.length > 0 &&
                                        docSlots[slotIndex].map((item, index) => (
                                            <motion.div
                                                onClick={() => setSlotTime(item.time)}
                                                className={`relative group cursor-pointer`}
                                                key={index}
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-all duration-300"></div>
                                                <div className={`relative px-4 py-3 rounded-xl text-center transition-all duration-300 ${item.time === slotTime
                                                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                                                    : "bg-white text-gray-600 border border-gray-200"
                                                    }`}>
                                                    <p className="font-medium">{item.time.toLowerCase()}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>
                            </div>

                            <motion.button
                                onClick={bookAppointment}
                                className="w-full max-w-md mx-auto block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="absolute w-64 h-64 mt-12 group-hover:rotate-45 transition-all duration-1000 ease-out -rotate-45 bg-white opacity-10 group-hover:scale-150"></span>
                                <span className="relative">Book Appointment with {docInfo.name}</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-16"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center relative inline-block">
                            <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
                                Similar Specialists
                            </span>
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full opacity-70"></div>
                        </h2>
                        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
                    </motion.div>
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
        )
    );
};

export default Appointment;