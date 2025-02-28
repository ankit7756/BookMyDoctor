import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { token, setToken, userData } = useContext(AppContext);
    const [showMenu, setShowMenu] = useState(false);
    const logout = () => {
        setToken(false);
        localStorage.removeItem("token");
    };

    return (
        <div className="flex items-center justify-between py-4 px-6 mb-5 bg-gradient-to-r from-teal-500 to-blue-800 rounded-b-3xl shadow-lg">
            <img
                onClick={() => navigate("/")}
                className="w-[13rem] max-w-[13rem] cursor-pointer brightness-0 invert transition-transform hover:scale-105"
                src={assets.BookMyDoctorLogo}
                alt="Logo"
            />

            <ul className="hidden md:flex items-center gap-6 font-medium text-white">
                <NavLink to="/">
                    <li className="py-2 px-4 rounded-full hover:bg-white/20 transition-all duration-300">
                        HOME
                        <hr className="border-none h-0.5 bg-white w-3/5 mx-auto mt-1 hidden [.active_&]:block" />
                    </li>
                </NavLink>
                <NavLink to="/doctors">
                    <li className="py-2 px-4 rounded-full hover:bg-white/20 transition-all duration-300">
                        OUR DOCTORS
                        <hr className="border-none h-0.5 bg-white w-3/5 mx-auto mt-1 hidden [.active_&]:block" />
                    </li>
                </NavLink>
                <NavLink to="/about">
                    <li className="py-2 px-4 rounded-full hover:bg-white/20 transition-all duration-300">
                        ABOUT
                        <hr className="border-none h-0.5 bg-white w-3/5 mx-auto mt-1 hidden [.active_&]:block" />
                    </li>
                </NavLink>
                <NavLink to="/contact">
                    <li className="py-2 px-4 rounded-full hover:bg-white/20 transition-all duration-300">
                        CONTACT
                        <hr className="border-none h-0.5 bg-white w-3/5 mx-auto mt-1 hidden [.active_&]:block" />
                    </li>
                </NavLink>
            </ul>

            <div className="flex items-center gap-4">
                {token && userData ? (
                    <div className="relative flex items-center gap-2 cursor-pointer group">
                        <img
                            className="w-10 h-10 rounded-full object-cover border-2 border-white"
                            src={userData.image}
                            alt=""
                        />
                        <img
                            className="w-2.5 brightness-0 invert"
                            src={assets.dropdown_icon}
                            alt=""
                        />
                        <div className="absolute top-full right-0 pt-3 hidden group-hover:block z-20">
                            <div className="bg-white rounded-xl shadow-lg p-4 min-w-48 flex flex-col gap-3 text-blue-900 font-medium">
                                <p
                                    onClick={() => navigate("my-profile")}
                                    className="px-3 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
                                >
                                    My Profile
                                </p>
                                <p
                                    onClick={() => navigate("my-appointments")}
                                    className="px-3 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
                                >
                                    My Appointments
                                </p>
                                <p
                                    onClick={logout}
                                    className="px-3 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-white text-blue-900 px-6 py-2 rounded-full font-medium hidden md:block hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                        Create Account
                    </button>
                )}

                <img
                    onClick={() => setShowMenu(true)}
                    className="w-6 brightness-0 invert md:hidden cursor-pointer"
                    src={assets.menu_icon}
                    alt=""
                />
                {/* ------ Mobile Menu ------ */}
                {showMenu && (
                    <div
                        className={`fixed inset-0 md:hidden z-20 bg-white/95 backdrop-blur-md transition-all duration-300 ${showMenu ? "w-full" : "w-0"
                            }`}
                    >
                        <div className="flex items-center justify-between px-5 py-6">
                            <img className="w-24" src={assets.logo} alt="" />
                            <img
                                className="w-6 cursor-pointer"
                                onClick={() => setShowMenu(false)}
                                src={assets.cross_icon}
                                alt=""
                            />
                        </div>
                        <ul className="flex flex-col items-center gap-4 mt-8 text-lg font-medium text-blue-900">
                            <NavLink onClick={() => setShowMenu(false)} to="/">
                                <p className="px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300">
                                    Home
                                </p>
                            </NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                                <p className="px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300">
                                    All Doctors
                                </p>
                            </NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to="/about">
                                <p className="px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300">
                                    About
                                </p>
                            </NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to="/contact">
                                <p className="px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300">
                                    Contact
                                </p>
                            </NavLink>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;