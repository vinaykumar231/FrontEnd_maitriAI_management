import React, { useEffect, useState } from 'react';
import axios from '../helper/axios';

const UpdateUserForm = () => {
  const [userData, setUserData] = useState([]);
  
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/read/maitri_user', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      setUserData(response.data.data);
      console.log("Data successfully fetched");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchUserData();
  }, []);
  
  return (
    <div className="p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center p-4 border-b">
          <select className="border rounded px-3 py-2">
            <option>Filter Type...</option>
          </select>
          <div>
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">Add User</button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Toggle Columns</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="py-3 px-4 text-left">User ID</th>
                <th className="py-3 px-4 text-left">User Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Created</th>
                <th className="py-3 px-4 text-left">User Type</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 border-b">{item.user_details.user_id}</td>
                  <td className="py-3 px-4 border-b">{item.user_details.user_name}</td>
                  <td className="py-3 px-4 border-b">{item.user_details.user_email}</td>
                  <td className="py-3 px-4 border-b">{item.user_details.phone_no}</td>
                  <td className="py-3 px-4 border-b">{item.user_details.created_on}</td>
                  <td className="py-3 px-4 border-b">{item.user_details.user_type}</td>
                  <td className="py-3 px-4 border-b">
                    <button className="text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-end p-4 bg-blue-900 text-white">
          <button className="px-4 py-2 mr-2">Previous</button>
          <button className="px-4 py-2">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserForm;