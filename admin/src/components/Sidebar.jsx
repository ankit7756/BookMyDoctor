import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const { adminToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-white border-r shadow-sm">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-800 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="hidden md:block">
            <h3 className="font-medium text-gray-800">
              Admin Portal
            </h3>
            <p className="text-xs text-gray-500">Manage your services</p>
          </div>
        </div>
      </div>

      {adminToken && (
        <ul className="text-gray-600 mt-4">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-6 rounded-lg mx-2 transition-all duration-200 ${isActive
                ? "bg-blue-50 text-primary border-l-4 border-primary font-medium"
                : "hover:bg-gray-100"
              }`
            }
            to={"/admin-dashboard"}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={assets.home_icon} alt="" className="w-5 h-5" />
            </div>
            <p className="hidden md:block text-sm">Dashboard</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-6 rounded-lg mx-2 transition-all duration-200 ${isActive
                ? "bg-blue-50 text-primary border-l-4 border-primary font-medium"
                : "hover:bg-gray-100"
              }`
            }
            to={"/all-appointments"}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={assets.appointment_icon} alt="" className="w-5 h-5" />
            </div>
            <p className="hidden md:block text-sm">Appointments</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-6 rounded-lg mx-2 transition-all duration-200 ${isActive
                ? "bg-blue-50 text-primary border-l-4 border-primary font-medium"
                : "hover:bg-gray-100"
              }`
            }
            to={"add-doctors"}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={assets.add_icon} alt="" className="w-5 h-5" />
            </div>
            <p className="hidden md:block text-sm">Add Doctor</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 md:px-6 rounded-lg mx-2 transition-all duration-200 ${isActive
                ? "bg-blue-50 text-primary border-l-4 border-primary font-medium"
                : "hover:bg-gray-100"
              }`
            }
            to={"doctor-list"}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={assets.people_icon} alt="" className="w-5 h-5" />
            </div>
            <p className="hidden md:block text-sm">Doctor List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;