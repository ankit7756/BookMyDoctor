import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";

const AllAppointments = () => {
  const { adminToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

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
    if (adminToken) {
      getAllAppointments();
    }
  }, [adminToken]);

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
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent text-sm font-extrabold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4 inline-block bg-indigo-50 shadow-sm border border-indigo-100">Admin Dashboard</span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
              All Appointments
            </span>
            <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full opacity-70"></div>
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            View, manage, and track all appointments—ensure seamless healthcare operations.
          </p>
        </motion.div>

        {/* Appointments Table */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl border border-gray-100 max-h-[80vh] overflow-y-auto scrollbar-hide"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-4 px-6 border-b border-gray-200 bg-gray-50 font-medium text-gray-800">
            <p>#</p>
            <p>Patient</p>
            <p>Age</p>
            <p>Date & Time</p>
            <p>Doctor</p>
            <p>Fees</p>
            <p>Actions</p>
          </div>
          <div className="pt-4">
            {appointments.map((appointment, index) => (
              <motion.div
                className="flex flex-wrap justify-between max-sm:gap-2 sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-600 py-4 px-6 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 relative group"
                key={index}
                variants={scaleUp}
              >
                <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <p className="max-sm:hidden text-sm font-medium">{index + 1}</p>
                <div className="flex items-center gap-2">
                  <img
                    className="w-12 h-12 object-cover rounded-full border-2 border-indigo-100 shadow-md"
                    src={appointment.userData.image}
                    alt={appointment.userData.name}
                  />
                  <p className="text-sm font-medium text-gray-800 line-clamp-1">{appointment.userData.name}</p>
                </div>
                <p className="max-sm:hidden text-sm font-medium text-gray-600">{calculateAge(appointment.userData.dob)}</p>
                <p className="text-sm font-medium text-gray-600">{slotDateFormat(appointment.slotDate)}, {appointment.slotTime}</p>
                <div className="flex items-center gap-2">
                  <img
                    className="w-12 h-12 object-cover rounded-full border-2 border-indigo-100 shadow-md"
                    src={appointment.doctorData.image}
                    alt={appointment.doctorData.name}
                  />
                  <p className="text-sm font-medium text-gray-800 line-clamp-1">{appointment.doctorData.name}</p>
                </div>
                <p className="text-sm font-medium text-gray-600">{currency}{appointment.amount}</p>
                {appointment.cancelled ? (
                  <p className="font-medium text-sm px-3 py-1 bg-red-100 text-red-700 rounded-full shadow-md hover:bg-red-200 transition-all duration-300">
                    Cancelled
                  </p>
                ) : appointment.payment ? (
                  <p className="font-medium text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full shadow-md hover:bg-green-200 transition-all duration-300">
                    Booked
                  </p>
                ) : (
                  <img
                    onClick={() => cancelAppointment(appointment.id)}
                    className="w-8 cursor-pointer text-red-500 hover:brightness-75 transition-all duration-300"
                    src={assets.cancel_icon}
                    alt="Cancel"
                  />
                )}
              </motion.div>
            ))}
          </div>
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
  );
};

export default AllAppointments;