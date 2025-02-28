import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Login = () => {
    const [state, setState] = useState("Sign Up");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const { backendUrl, token, setToken } = useContext(AppContext);

    // Animation variants
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

    const onsubmitHandler = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            if (state === "Sign Up") {
                const { data } = await axios.post(backendUrl + "/api/user/register", {
                    name,
                    password,
                    email,
                });
                if (data.success) {
                    localStorage.setItem("token", data.token);
                    setToken(data.token);
                    toast.success("Account created successfully!");
                } else {
                    toast.error(data.message);
                }
            } else {
                const { data } = await axios.post(backendUrl + "/api/user/login", {
                    password,
                    email,
                });
                if (data.success) {
                    localStorage.setItem("token", data.token);
                    setToken(data.token);
                    toast.success("Logged in successfully!");
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.error("Authentication error:", error);
            toast.error(
                error.response?.data?.message ||
                "An error occurred during authentication"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
        if (state === "Sign Up") {
            setName("");
        }
    };

    useEffect(() => {
        resetForm();
    }, [state]);

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <motion.div
            className="min-h-[80vh] flex items-center py-16 bg-gradient-to-b from-white via-blue-50 to-indigo-100 relative overflow-hidden"
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
                <motion.div
                    className="max-w-md mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div
                        className="text-center mb-6"
                        variants={fadeIn}
                    >
                        <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent text-sm font-extrabold tracking-wide uppercase px-4 py-1.5 rounded-full mb-4 inline-block bg-indigo-50 shadow-sm border border-indigo-100">Access Your Health</span>

                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {state === "Sign Up" ? "Create Account" : "Login"}
                        </h1>

                        <p className="text-gray-600 text-sm">
                            Please {state === "Sign Up" ? "sign up" : "log in"} to access your appointments and manage your health.
                        </p>
                    </motion.div>

                    <form onSubmit={onsubmitHandler} className="flex flex-col gap-5">
                        {state === "Sign Up" && (
                            <motion.div
                                className="w-full"
                                variants={scaleUp}
                            >
                                <label className="block text-gray-700 font-medium mb-1 text-sm">Full Name</label>
                                <input
                                    className="border border-gray-200 rounded-full w-full px-4 py-2 mt-1 bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 disabled:bg-gray-200 disabled:cursor-not-allowed"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                    disabled={isSubmitting}
                                />
                            </motion.div>
                        )}

                        <motion.div
                            className="w-full"
                            variants={scaleUp}
                        >
                            <label className="block text-gray-700 font-medium mb-1 text-sm">Email</label>
                            <input
                                className="border border-gray-200 rounded-full w-full px-4 py-2 mt-1 bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 disabled:bg-gray-200 disabled:cursor-not-allowed"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                disabled={isSubmitting}
                            />
                        </motion.div>

                        <motion.div
                            className="w-full"
                            variants={scaleUp}
                        >
                            <label className="block text-gray-700 font-medium mb-1 text-sm">Password</label>
                            <input
                                className="border border-gray-200 rounded-full w-full px-4 py-2 mt-1 bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 disabled:bg-gray-200 disabled:cursor-not-allowed"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                disabled={isSubmitting}
                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 rounded-full text-base font-medium ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
                                }`}
                            variants={scaleUp}
                            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                            transition={{ duration: 0.3 }}
                        >
                            {isSubmitting
                                ? "Processing..."
                                : state === "Sign Up"
                                    ? "Create Account"
                                    : "Login"
                            }
                        </motion.button>

                        <motion.p
                            className="text-center text-gray-600 text-sm mt-4"
                            variants={fadeIn}
                        >
                            {state === "Sign Up" ? (
                                <>
                                    Already have an account?{" "}
                                    <span
                                        onClick={() => !isSubmitting && setState("Login")}
                                        className={`text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
                                            }`}
                                    >
                                        Login here
                                    </span>
                                </>
                            ) : (
                                <>
                                    Create a new account?{" "}
                                    <span
                                        onClick={() => !isSubmitting && setState("Sign Up")}
                                        className={`text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
                                            }`}
                                    >
                                        Sign up here
                                    </span>
                                </>
                            )}
                        </motion.p>
                    </form>
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
    );
};

export default Login;