import React from 'react';
import { X } from 'lucide-react';
import { assets } from '../assets/assets';

const PaymentModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold">Pay via eSewa</h2>
                        <img
                            src={assets.eSewaLogo}
                            alt="eSewa Logo"
                            className="h-6 object-contain"
                        />
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <div className="text-center flex flex-col gap-6">
                    <p className="font-medium text-gray-700">BookMyDoctor Official eSewa</p>

                    {/* Added more CSS utilities to remove any possible borders/lines */}
                    <div className="flex justify-center"> {/* Wrapper div to center the image */}
                        <img
                            src={assets.qrLogo}
                            alt="eSewa Payment QR Code"
                            className="w-48 h-48 object-contain border-0 outline-none shadow-none"
                            style={{ borderLeft: 'none' }} // Force remove any left border
                        />
                    </div>

                    <p className="text-sm text-gray-600">Scan this QR Code to Confirm Payment</p>
                    <button
                        onClick={onConfirm}
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Confirm Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;