import React, { useState } from 'react';
import axios from '../helper/axios';


const AuthForms = () => {
  const [showSendOtpForm, setShowSendOtpForm] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    new_password: '',
    confirm_new_password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const { email } = formData;
      const response = await axios.post('/send_otp', { email });
      Swal.fire({
        title: 'OTP Sent!',
        text: 'Please check your email for the OTP.',
        icon: 'success',
      });
      setShowSendOtpForm(false); // Show reset password form after OTP is sent
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response ? error.response.data.detail : error.message,
        icon: 'error',
      });
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const { email, otp, new_password, confirm_new_password } = formData;
      const response = await axios.put('/reset_password', {
        email,
        otp,
        new_password,
        confirm_new_password,
      });
      closeModal();
      navigate("/");
      Swal.fire({
        title: 'Password Reset Successful!',
        text: 'Your password has been changed successfully.',
        icon: 'success',
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response ? error.response.data.detail : error.message,
        icon: 'error',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-cyan-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {showSendOtpForm ? 'Send OTP' : 'Reset Password'}
        </h2>
        {showSendOtpForm ? (
          <form onSubmit={handleSendOtp}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"

            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="new_password">
                New Password
              </label>
              <input
                type="password"
                id="new_password"
                name="new_password"
                value={formData.new_password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirm_new_password">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm_new_password"
                name="confirm_new_password"
                value={formData.confirm_new_password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reset Password
            </button>
          </form>
        )}
        {!showSendOtpForm && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowSendOtpForm(true)}
              className="text-blue-500 hover:underline"
            >
              Back to Send OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForms;