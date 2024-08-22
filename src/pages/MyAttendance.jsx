import React, { useEffect, useState } from "react";
import axios from '../helper/axios';
import Swal from "sweetalert2";

const MyAttendance = () => {
  const [employeeRecords, setEmployeeRecords] = useState([]);
  const [attendanceStatuses, setAttendanceStatuses] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeRecords = async () => {
      try {
        const response = await axios.get("/employee/only_id_name/");
        setEmployeeRecords(response.data);

        const initialStatuses = {};
        response.data.forEach((employee) => {
          initialStatuses[employee.emloyee_id] = "present"; // Default to "present"
          
        });
        setAttendanceStatuses(initialStatuses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      }
    };

    fetchEmployeeRecords();
  }, []);

  const handleStatusChange = (employeeId, status) => {
    setAttendanceStatuses(prevStatuses => ({
      ...prevStatuses,
      [employeeId]: status
    }));
  };

  const handleSubmitAll = async (e) => {
    e.preventDefault();

    const employeeIds = Object.keys(attendanceStatuses).join(',');
    const statuses = Object.values(attendanceStatuses).join(',');
    

    const formData = new FormData();
    formData.append("employee_ids", employeeIds);
    formData.append("status", statuses);

    try {
      const response = await axios.post("/attendance/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        title: "Success!",
        text: "Attendance submitted successfully!",
        icon: "success",
        confirmButtonColor: "#10B981",
      });

      console.log("Attendance submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting attendance:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to submit attendance. Please try again.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-blue-800">
          <h1 className="text-3xl font-bold text-white">Employee Attendance</h1>
        </div>
        <form onSubmit={handleSubmitAll} className="px-4 py-5 sm:p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50 text-blue-600">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Employee ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Employee Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Attendance Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employeeRecords.map((employee) => (
                  <tr key={employee.emloyee_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <input
                        type="text"
                        value={employee.emloyee_id}
                        className="w-full rounded text-gray-700"
                        readOnly
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <input
                        type="text"
                        value={employee.name}
                        className="w-full  rounded text-gray-700"
                        readOnly
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <select
                        value={attendanceStatuses[employee.emloyee_id] || ""}
                        className="w-full px-3 py-2 border rounded-md bg-white text-gray-800 hover:border-blue-400 focus:border-blue-500 focus:ring focus:ring-blue-200"
                        onChange={(e) => handleStatusChange(employee.emloyee_id, e.target.value)}
                      >
                        <option value="present">Present</option>
                        <option value="absent">Absent</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit All Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAttendance;
