import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../auth/LoginContext'; // Adjust the path as needed
import Logo from '../../public/images/maitri logo.jpg'

const EmployeeDashboard = () => {
  const [user, setUser] = useState(null);
  const { logout } = useLogin(); // Use the useLogin hook to access logout function

  useEffect(() => {
    // Fetch user data from localStorage or API
    const userData = JSON.parse(localStorage.getItem('user')); // Example data retrieval
    setUser(userData);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    
    logout(); // Call the logout function from LoginContext
  };

  const employees = [];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-4 flex items-center space-x-4">
          <img
            src={Logo}
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-xl font-bold">MaitriAI</h1>
        </div>
        <nav className="flex-grow mt-6">
          <ul className="space-y-2">
            <li>
              <Link to="/UpdateUserForm" className="block py-2.5 px-4 text-sm hover:bg-blue-700">
                Users
              </Link>
            </li>
            <li>
              <Link to="/EmployeeProfile" className="block py-2.5 px-4 text-sm hover:bg-blue-700">
              Employees
              </Link>
            </li>
            <li>
              <Link to="/MyAttendance" className="block py-2.5 px-4 text-sm hover:bg-blue-700">
              Attendance 
              </Link>
            </li>
            <li>
              <Link to="/Payroll" className="block py-2.5 px-4 text-sm hover:bg-blue-700">
              Payroll
              </Link>
            </li>
            
            <li>
              <Link to="/" className="block py-2.5 px-4 text-sm hover:bg-blue-700" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <a href="/AddEmployee" className="block py-2.5 px-4 text-sm hover:bg-blue-700">
            Knowledge Base
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between bg-white p-4 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-700">Admin dashboard</h2>
            <p className="text-sm text-gray-500">Home</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-gray-700">05:25:26</div>
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              {/* <span className="text-gray-700">Ethan Antonio Centrovo</span> */}
            </div>
          </div>
        </header>

        {/* Main Section */}
        <main className="flex-grow p-4 bg-gray-100">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <input
                type="text"
                placeholder="Search Employee"
                className="border border-gray-300 rounded px-4 py-2"
              />
              <div className="flex space-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Employees</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-3 border-b border-gray-200">ID</th>
                    <th className="py-2 px-3 border-b border-gray-200">Name</th>
                    <th className="py-2 px-3 border-b border-gray-200">Department</th>
                    <th className="py-2 px-3 border-b border-gray-200">Contact</th>
                    <th className="py-2 px-3 border-b border-gray-200">Requests</th>
                    <th className="py-2 px-3 border-b border-gray-200">Hire Date</th>
                    <th className="py-2 px-3 border-b border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="py-2 px-3 border-b border-gray-200">{employee.id}</td>
                      <td className="py-2 px-3 border-b border-gray-200 flex items-center space-x-2">
                        <img
                          src={employee.image}
                          alt={employee.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-blue-500">{employee.name}</span>
                      </td>
                      <td className="py-2 px-3 border-b border-gray-200">{employee.department}</td>
                      <td className="py-2 px-3 border-b border-gray-200">{employee.contact}</td>
                      <td className="py-2 px-3 border-b border-gray-200">{employee.requests}</td>
                      <td className="py-2 px-3 border-b border-gray-200">{employee.hireDate}</td>
                      <td className="py-2 px-3 border-b border-gray-200">
                        <button className="text-blue-500">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;