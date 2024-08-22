import 'ol/ol.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeDashboard from './pages/AdminDashboard';
import LoginWithMap from './auth/LoginWithMap ';
import SignUpForm from './auth/SignUpForm';
import AuthForms from './auth/ForgotPassword';
import Home from './pages/Home';
import Modal from './auth/Modal ';
import './App.css'
import { LoginProvider } from './auth/LoginContext';
import UpdateUserForm from './pages/UpdateUserForm';
import EmployeeProfile from './pages/EmployeeProfile';
import MyAttendance from './pages/MyAttendance';
import Payroll from './pages/Payroll';
import AboutUs from './pages/AboutUs ';
import ContactUs from './pages/ContactUs';
import Product from './pages/Product';
import AddEmployee from './pages/AddEmployee';


function App() {
  const [showModal, setShowModal] = useState(false);

  const openLoginModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const logout = () => {
    // Your logout logic here
    console.log('Logged out');
  };

  return (
    <LoginProvider>
      <Router>
        <Routes>

          <Route path="/" element={<Home openLogin={openLoginModal} />} />
          <Route path="/LoginWithMap" element={<LoginWithMap closeModal={closeModal} />} />

          <Route path="/dashboard" element={<EmployeeDashboard logout={logout} />} />

          <Route path="/LoginWithMap" element={<LoginWithMap />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="/signUpForm" element={<SignUpForm closeModal={closeModal} />} />
          <Route path="/AuthForms" element={<AuthForms closeModal={closeModal} />} />
          <Route path="/UpdateUserForm" element={<UpdateUserForm />} />
          <Route path="/EmployeeProfile" element={<EmployeeProfile />} />
          <Route path="/MyAttendance" element={<MyAttendance />} />
          <Route path="/Payroll" element={<Payroll />} />
          <Route path="/AboutUs" element={<AboutUs openLogin={openLoginModal} />}  />
          <Route path="/ContactUs" element={<ContactUs openLogin={openLoginModal} />}  />
          <Route path="/Product" element={<Product openLogin={openLoginModal} />}  />
          <Route path="/AddEmployee" element={<AddEmployee  />}  />
          
        </Routes>
        {showModal && <Modal closeModal={closeModal} />}
      </Router>


    </LoginProvider>
  );
}

export default App
