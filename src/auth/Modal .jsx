import React from 'react';
import LoginWithMap from '../auth/LoginWithMap ';

const Modal = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-[35rem] relative">
                <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={closeModal}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <LoginWithMap closeModal={closeModal} />
            </div>
        </div>
    );
};

export default Modal;
