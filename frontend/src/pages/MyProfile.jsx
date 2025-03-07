import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets.js"; // Make sure this path is correct
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // Import framer-motion for animations

const MyProfile = () => {
    const { userData, setUserData, backendUrl, token, loadUserProfileData } = useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const updateUserProfileData = async () => {
        try {
            setLoading(true); // Start loader
            const formData = new FormData();
            formData.append("name", userData.name);
            formData.append("phone", userData.phone);
            formData.append("address", JSON.stringify(userData.address));
            formData.append("gender", userData.gender);
            formData.append("dob", userData.dob);
            if (image) formData.append("image", image);

            const { data } = await axios.post(
                backendUrl + "/api/user/update-profile",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (data.success) {
                toast.success(data.message);
                await loadUserProfileData();
                setImage(false);
                setIsEdit(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false); // Stop loader
        }
    };

    return (
        userData && (
            <motion.div
                className="py-16 bg-gradient-to-b from-white via-blue-50 to-indigo-100 min-h-screen relative overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                {/* Decorative Elements */}
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
                        <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent text-sm font-extrabold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4 inline-block bg-indigo-50 shadow-sm border border-indigo-100">Your Details</span>

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
                            <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
                                My Profile
                            </span>
                            <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full opacity-70"></div>
                        </h1>

                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                            Manage your personal information and keep your profile up-to-date for a seamless experience.
                        </p>
                    </motion.div>

                    {/* Profile Content */}
                    <motion.div
                        className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Background Glow on Hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                        {loading && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                                <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
                            </div>
                        )}

                        <div className="relative z-10">
                            {/* Profile Image */}
                            <motion.div
                                className="flex justify-center mb-8"
                                variants={scaleUp}
                            >
                                {isEdit ? (
                                    <label htmlFor="image" className="relative cursor-pointer group/image">
                                        <div className="inline-block relative">
                                            <img
                                                className="w-36 h-36 rounded-full object-cover opacity-75 border-4 border-indigo-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                                                src={image ? URL.createObjectURL(image) : userData.image}
                                                alt=""
                                            />
                                            <img
                                                className="w-10 absolute bottom-[-10px] right-[-10px] bg-white rounded-full p-2 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                                                src={image ? "" : assets.upload_icon}
                                                alt="Upload"
                                            />
                                        </div>
                                        <input
                                            onChange={(e) => setImage(e.target.files[0])}
                                            type="file"
                                            id="image"
                                            hidden
                                        />
                                    </label>
                                ) : (
                                    <img
                                        className="w-36 h-36 rounded-full object-cover shadow-md border-4 border-indigo-100 hover:shadow-lg transition-shadow duration-300"
                                        src={userData.image}
                                        alt={userData.name}
                                    />
                                )}
                            </motion.div>

                            {/* Name */}
                            <div className="mb-6 text-center">
                                {isEdit ? (
                                    <motion.input
                                        className="bg-gray-100 text-2xl px-4 py-2 mb-2 outline-none font-medium max-w-md rounded-full border border-gray-200 focus:border-indigo-500 transition-all duration-300"
                                        type="text"
                                        value={userData.name}
                                        onChange={(e) =>
                                            setUserData((prev) => ({ ...prev, name: e.target.value }))
                                        }
                                        variants={scaleUp}
                                    />
                                ) : (
                                    <motion.p
                                        className="font-medium text-2xl text-gray-900 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 px-6 py-2 inline-block shadow-md"
                                        variants={scaleUp}
                                    >
                                        {userData.name}
                                    </motion.p>
                                )}
                            </div>

                            <hr className="bg-gray-200 h-[1px] border-none w-[80%] mx-auto mb-6" />

                            {/* Contact Information */}
                            <motion.div
                                className="mb-8"
                                variants={fadeIn}
                            >
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contact Information
                                </h2>
                                <div className="grid grid-cols-[1fr_3fr] gap-y-4 mt-3 text-gray-700">
                                    <p className="font-medium">Email Id:</p>
                                    <p className="text-blue-500 hover:text-blue-600 transition-colors duration-300">{userData.email}</p>
                                    <p className="font-medium">Phone:</p>
                                    {isEdit ? (
                                        <motion.input
                                            className="bg-gray-100 max-w-md px-4 py-2 rounded-full border border-gray-200 focus:border-indigo-500 outline-none transition-all duration-300"
                                            type="text"
                                            value={userData.phone}
                                            onChange={(e) =>
                                                setUserData((prev) => ({ ...prev, phone: e.target.value }))
                                            }
                                            variants={scaleUp}
                                        />
                                    ) : (
                                        <p className="text-gray-600 hover:text-gray-700 transition-colors duration-300">{userData.phone}</p>
                                    )}
                                    <p className="font-medium">Address:</p>
                                    {isEdit ? (
                                        <div className="space-y-2">
                                            <motion.input
                                                className="bg-gray-100 w-full max-w-md px-4 py-2 rounded-full border border-gray-200 focus:border-indigo-500 outline-none transition-all duration-300"
                                                onChange={(e) =>
                                                    setUserData((prev) => ({
                                                        ...prev,
                                                        address: { ...prev.address, line1: e.target.value },
                                                    }))
                                                }
                                                value={userData.address.line1}
                                                type="text"
                                                placeholder="Street address"
                                            />
                                            <motion.input
                                                className="bg-gray-100 w-full max-w-md px-4 py-2 rounded-full border border-gray-200 focus:border-indigo-500 outline-none transition-all duration-300"
                                                onChange={(e) =>
                                                    setUserData((prev) => ({
                                                        ...prev,
                                                        address: { ...prev.address, line2: e.target.value },
                                                    }))
                                                }
                                                value={userData.address.line2}
                                                type="text"
                                                placeholder="City, State, ZIP"
                                            />
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">
                                            {userData.address.line1}
                                            <br />
                                            {userData.address.line2}
                                        </p>
                                    )}
                                </div>
                            </motion.div>

                            {/* Basic Information */}
                            <motion.div
                                className="mb-10"
                                variants={fadeIn}
                            >
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Basic Information
                                </h2>
                                <div className="grid grid-cols-[1fr_3fr] gap-y-4 mt-3 text-gray-700">
                                    <p className="font-medium">Gender:</p>
                                    {isEdit ? (
                                        <motion.select
                                            className="max-w-md rounded-full bg-gray-100 px-4 py-2 border border-gray-200 focus:border-indigo-500 outline-none transition-all duration-300"
                                            onChange={(e) =>
                                                setUserData((prev) => ({ ...prev, gender: e.target.value }))
                                            }
                                            value={userData.gender}
                                            variants={scaleUp}
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </motion.select>
                                    ) : (
                                        <p className="text-gray-600">{userData.gender}</p>
                                    )}
                                    <p className="font-medium">Birthday:</p>
                                    {isEdit ? (
                                        <motion.input
                                            className="max-w-md rounded-full bg-gray-100 px-4 py-2 border border-gray-200 focus:border-indigo-500 outline-none transition-all duration-300"
                                            type="date"
                                            onChange={(e) =>
                                                setUserData((prev) => ({ ...prev, dob: e.target.value }))
                                            }
                                            value={userData.dob}
                                            variants={scaleUp}
                                        />
                                    ) : (
                                        <p className="text-gray-600">{userData.dob}</p>
                                    )}
                                </div>
                            </motion.div>

                            {/* Action Button */}
                            <motion.div
                                className="text-center mt-10"
                                variants={fadeIn}
                            >
                                {isEdit ? (
                                    <motion.button
                                        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                        onClick={updateUserProfileData}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Save Information
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                        onClick={() => setIsEdit(true)}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Edit Profile
                                    </motion.button>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Spacer for Footer */}
                <div className="h-24"></div>

                <style jsx>{`
                    .bg-pattern {
                        background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-8.8-7.2-16-16-16S8 31.2 8 40s7.2 16 16 16 16-7.2 16-16zm0 0c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zm-32 0c0-12.7 10.3-23 23-23s23 10.3 23 23-10.3 23-23 23-23-10.3-23-23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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

export default MyProfile;