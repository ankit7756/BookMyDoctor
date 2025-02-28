import React from "react";
import { assets } from "../assets/assets";
import { Link as RouterLink } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="py-12 bg-gradient-to-b from-teal-50 to-blue-50">
            <div className="absolute top-0 left-0 w-60 h-60 bg-teal-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="flex flex-col items-start">
                        <img
                            className="mb-4 w-44 md:w-48 object-contain shadow-sm rounded"
                            src={assets.BookMyDoctorLogo}
                            alt="Prescripto Logo"
                        />
                        <p className="text-sm text-gray-700 leading-5 max-w-md">
                            BookMyDoctor connects you with trusted doctors for seamless appointments and expert care. We’re dedicated to your well-being with a simple, reliable platform.
                        </p>
                    </div>

                    <div className="flex flex-col items-start">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <RouterLink
                                to="/"
                                className="block text-gray-700 hover:text-teal-600 transition-colors duration-200"
                            >
                                Home
                            </RouterLink>
                            <RouterLink
                                to="/about"
                                className="block text-gray-700 hover:text-teal-600 transition-colors duration-200"
                            >
                                About Us
                            </RouterLink>
                            <RouterLink
                                to="/doctors"
                                className="block text-gray-700 hover:text-teal-600 transition-colors duration-200"
                            >
                                Our Doctors
                            </RouterLink>
                            <RouterLink
                                to="/contact"
                                className="block text-gray-700 hover:text-teal-600 transition-colors duration-200"
                            >
                                Contact Us
                            </RouterLink>
                        </ul>
                    </div>

                    {/* Right Section (Contact & Social) */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Contact & Connect</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-700 flex items-center gap-2">
                                <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +977-9873671893
                            </li>
                            <li className="text-gray-700 flex items-center gap-2">
                                <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                bookmydoctor@gmail.com
                            </li>
                        </ul>
                        <div className="mt-6">
                            <p className="text-gray-700 mb-3">Follow Us</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.325V1.325C24 .597 23.403 0 22.675 0z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.402 5.142 1.573 6.593-.788-.026-1.528-.242-2.177-.607-.022 2.007 1.378 3.896 3.353 4.304-.589.161-1.21.246-1.853.246-.441 0-.865-.042-1.282-.121.865 2.708 3.375 4.675 6.341 4.731-2.459 1.916-5.413 2.784-8.47 2.784-.551 0-1.098-.032-1.634-.095 3.004 1.924 6.563 3.03 10.391 3.03 12.485 0 19.318-10.346 19.318-19.318 0-.294-.007-.587-.02-.879 1.325-.955 2.48-2.141 3.39-3.497z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.331 3.608 1.306C21.5 4.511 21.767 5.776 21.93 7.15c.059 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.365-.331 2.633-1.306 3.608-1.051 1.051-2.242 1.244-3.608 1.306-1.265.059-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.331-3.608-1.306-1.051-1.051-1.244-2.242-1.306-3.608-.059-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.331-2.633 1.306-3.608C4.511 2.5 5.776 2.233 7.15 2.07 8.415 2.011 8.795 2 12 2.163zm0 5.837a4.163 4.163 0 100 8.326 4.163 4.163 0 000-8.326zm0 6.913a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zm9.75-8.913a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-6 text-center">
                    <hr className="border-gray-200" />
                    <p className="py-3 text-xl text-gray-600">
                        © 2025 BookMyDoctor. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;