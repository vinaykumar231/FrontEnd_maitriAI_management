import { useState } from 'react';
import axios from '../helper/axios';
import { format } from 'date-fns';
import { useLogin } from '../auth/LoginContext';

const AddAdmissionForm = () => {
  const [formData, setFormData] = useState({
    student_name: '',
    student_email: '',
    course: '',
    batch: '',
    primary_number: '',
    primary_email_id: '',
    current_address: '',
    permanent_address: '',
    previous_education_level: '',
    previous_institution: '',
    previous_percentage: '',
    parent_name: '',
    parent_relation: '',
    parent_contact_number: '',
    emergency_contact_name: '',
    emergency_relation: '',
    emergency_contact_number: '',
    date_of_birth: null,
    gender: '',
    nationality: '',
    profile_pic: null,
    documents: null,
    languages: '',
  });

  // Handles input fields for text data
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles input fields for file data
  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object to handle file uploads
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      // Send POST request to backend
      const token = localStorage.getItem('token');
      await axios.post('/admission/add_admission', data, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Admission created successfully');
    } catch (error) {
      alert(`Error creating admission: ${error.response?.data?.detail || error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
      <div className="grid grid-cols-2 gap-4">
        {/* Student Name */}
        <div>
          <label htmlFor="student_name" className="block text-gray-700 font-bold mb-2">
            Student Name
          </label>
          <input
            type="text"
            id="student_name"
            name="student_name"
            value={formData.student_name}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Student Email */}
        <div>
          <label htmlFor="student_email" className="block text-gray-700 font-bold mb-2">
            Student Email
          </label>
          <input
            type="email"
            id="student_email"
            name="student_email"
            value={formData.student_email}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Course */}
        <div>
          <label htmlFor="course" className="block text-gray-700 font-bold mb-2">
            Course
          </label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Batch */}
        <div>
          <label htmlFor="batch" className="block text-gray-700 font-bold mb-2">
            Batch
          </label>
          <input
            type="text"
            id="batch"
            name="batch"
            value={formData.batch}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Primary Number */}
        <div>
          <label htmlFor="primary_number" className="block text-gray-700 font-bold mb-2">
            Primary Number
          </label>
          <input
            type="text"
            id="primary_number"
            name="primary_number"
            value={formData.primary_number}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Primary Email ID */}
        <div>
          <label htmlFor="primary_email_id" className="block text-gray-700 font-bold mb-2">
            Primary Email ID
          </label>
          <input
            type="email"
            id="primary_email_id"
            name="primary_email_id"
            value={formData.primary_email_id}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Current Address */}
        <div>
          <label htmlFor="current_address" className="block text-gray-700 font-bold mb-2">
            Current Address
          </label>
          <input
            type="text"
            id="current_address"
            name="current_address"
            value={formData.current_address}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Permanent Address */}
        <div>
          <label htmlFor="permanent_address" className="block text-gray-700 font-bold mb-2">
            Permanent Address
          </label>
          <input
            type="text"
            id="permanent_address"
            name="permanent_address"
            value={formData.permanent_address}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Previous Education Level */}
        <div>
          <label htmlFor="previous_education_level" className="block text-gray-700 font-bold mb-2">
            Previous Education Level
          </label>
          <input
            type="text"
            id="previous_education_level"
            name="previous_education_level"
            value={formData.previous_education_level}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Previous Institution */}
        <div>
          <label htmlFor="previous_institution" className="block text-gray-700 font-bold mb-2">
            Previous Institution
          </label>
          <input
            type="text"
            id="previous_institution"
            name="previous_institution"
            value={formData.previous_institution}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Previous Percentage */}
        <div>
          <label htmlFor="previous_percentage" className="block text-gray-700 font-bold mb-2">
            Previous Percentage
          </label>
          <input
            type="number"
            step="0.01"
            id="previous_percentage"
            name="previous_percentage"
            value={formData.previous_percentage}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Parent Name */}
        <div>
          <label htmlFor="parent_name" className="block text-gray-700 font-bold mb-2">
            Parent Name
          </label>
          <input
            type="text"
            id="parent_name"
            name="parent_name"
            value={formData.parent_name}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Parent Relation */}
        <div>
          <label htmlFor="parent_relation" className="block text-gray-700 font-bold mb-2">
            Parent Relation
          </label>
          <input
            type="text"
            id="parent_relation"
            name="parent_relation"
            value={formData.parent_relation}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Parent Contact Number */}
        <div>
          <label htmlFor="parent_contact_number" className="block text-gray-700 font-bold mb-2">
            Parent Contact Number
          </label>
          <input
            type="text"
            id="parent_contact_number"
            name="parent_contact_number"
            value={formData.parent_contact_number}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Emergency Contact Name */}
        <div>
          <label htmlFor="emergency_contact_name" className="block text-gray-700 font-bold mb-2">
            Emergency Contact Name
          </label>
          <input
            type="text"
            id="emergency_contact_name"
            name="emergency_contact_name"
            value={formData.emergency_contact_name}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Emergency Relation */}
        <div>
          <label htmlFor="emergency_relation" className="block text-gray-700 font-bold mb-2">
            Emergency Relation
          </label>
          <input
            type="text"
            id="emergency_relation"
            name="emergency_relation"
            value={formData.emergency_relation}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Emergency Contact Number */}
        <div>
          <label htmlFor="emergency_contact_number" className="block text-gray-700 font-bold mb-2">
            Emergency Contact Number
          </label>
          <input
            type="text"
            id="emergency_contact_number"
            name="emergency_contact_number"
            value={formData.emergency_contact_number}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="date_of_birth" className="block text-gray-700 font-bold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Nationality */}
        <div>
          <label htmlFor="nationality" className="block text-gray-700 font-bold mb-2">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Profile Picture */}
        <div className="mt-4">
          <label htmlFor="profile_pic" className="block text-gray-700 font-bold mb-2">
            Profile Picture
          </label>
          <input
            type="file"
            id="profile_pic"
            name="profile_pic"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Documents */}
        <div className="mt-4">
          <label htmlFor="documents" className="block text-gray-700 font-bold mb-2">
            Documents
          </label>
          <input
            type="file"
            id="documents"
            name="documents"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Languages */}
        <div>
          <label htmlFor="languages" className="block text-gray-700 font-bold mb-2">
            Languages Spoken
          </label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={formData.languages}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Admission
        </button>
      </div>
    </form>
  );
};

export default AddAdmissionForm;