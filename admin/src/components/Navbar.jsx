import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { adminToken, setAdminToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    adminToken && setAdminToken('');
    adminToken && localStorage.removeItem('adminToken');
  };

  return (
    <div className='flex justify-between items-center py-4 px-6 mb-5 bg-gradient-to-r from-teal-500 to-blue-800 rounded-b-3xl shadow-lg'>
      <div className='flex items-center gap-2'>
        <img
          onClick={() => navigate('/')}
          className='w-[13rem] max-w-[13rem] cursor-pointer brightness-0 invert transition-transform hover:scale-105'
          // className="w-[13rem] max-w-[13rem] cursor-pointer brightness-0 invert transition-transform hover:scale-105"
          src={assets.BookMyDoctorLogo}
          alt="Logo"
        />
        <span className='border border-white/20 text-sm ml-4 px-4 py-1.5 rounded-full bg-white/10 text-white font-medium'>
          Admin
        </span>
      </div>

      <button
        onClick={logout}
        className='bg-white text-blue-900 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105'
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;