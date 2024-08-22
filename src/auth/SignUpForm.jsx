import React, { useState } from 'react';
import axios from '../helper/axios';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const SignUpForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_password: '',
    phone_no: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/insert/maitri_user/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Handle success
      Swal.fire({
        title: "Sign-up successful",
        icon: "success",
      })
      console.log('Sign-up successful', response.data);
      closeModal();
      navigate("/");
    } catch (error) {
      // Handle error
      console.error('Sign-up failed', error.response ? error.response.data : error.message);
      alert('Sign-up failed: ' + (error.response ? error.response.data.detail : error.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-cyan-100">
            <div className="max-w-md w-full p-10 bg-white shadow-2xl rounded-xl">
                <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                        { label: "Username", type: "text", name: "user_name" },
                        { label: "Email", type: "email", name: "user_email" },
                        { label: "Password", type: "password", name: "user_password" },
                        { label: "Phone Number", type: "tel", name: "phone_no" }
                    ].map((field) => (
                        <div key={field.name}>
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={field.name}>
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                                required
                            />
                        </div>
                    ))}
                    
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transform hover:-translate-y-0.5"

                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;