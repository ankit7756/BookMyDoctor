import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
    return (
        <div className="flex flex-col items-center gap-6 py-16 text-gray-800 relative" id="speciality">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 -z-10 opacity-50"></div>

            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">
                    Browse by Specialty
                </h1>
                <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto text-center mt-2">
                    Easily find the right doctor for your needs and schedule appointments with confidence.
                </p>

                <div className="flex flex-col items-center pt-8 w-full">
                    <div className="flex justify-center gap-6 mb-6">
                        {specialityData.slice(0, 4).map((item, index) => (
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex flex-col items-center text-center cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-md"
                                key={item.speciality}
                                to={`/doctors/${item.speciality}`}
                            >
                                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm border border-teal-200">
                                    <img
                                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                                        src={item.image}
                                        alt={item.speciality}
                                    />
                                    <div className="absolute inset-0 bg-teal-500/5 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                                <p className="mt-3 text-sm md:text-base font-medium text-gray-800 hover:text-teal-600 transition-colors duration-300">
                                    {item.speciality.charAt(0).toUpperCase() + item.speciality.slice(1).toLowerCase()}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center gap-12">
                        {specialityData.slice(4, 6).map((item, index) => (
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                className="flex flex-col items-center text-center cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-md"
                                key={item.speciality}
                                to={`/doctors/${item.speciality}`}
                            >
                                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm border border-teal-200">
                                    <img
                                        className="w-14 h-14 md:w-16 md:h-16 object-contain"
                                        src={item.image}
                                        alt={item.speciality}
                                    />
                                    <div className="absolute inset-0 bg-teal-500/5 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                                <p className="mt-3 text-sm md:text-base font-medium text-gray-800 hover:text-teal-600 transition-colors duration-300">
                                    {item.speciality.charAt(0).toUpperCase() + item.speciality.slice(1).toLowerCase()}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialityMenu;