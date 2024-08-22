import React, { useEffect, useState } from 'react';
import axios from '../helper/axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const EmployeeProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('/employee-profiles/');
        setProfiles(response.data);
        fetchAttendance(response.data.map(profile => profile.employee.emloyee_id).join(','));
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch employee profiles');
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const fetchAttendance = async (employeeIds) => {
    try {
      const response = await axios.get(`/attendance/`, {
        params: { employee_ids: employeeIds },
      });

      const groupedAttendance = {};
      response.data.forEach(record => {
        if (!groupedAttendance[record.emloyee_id]) {
          groupedAttendance[record.emloyee_id] = [];
        }
        groupedAttendance[record.emloyee_id].push({
          title: record.status[0],
          date: record.date.split("T")[0],
          color: record.status[0] === 'absent' ? 'red' : 'green', // Set color based on status
        });
      });
      setAttendanceRecords(groupedAttendance);
    } catch (err) {
      console.error("Error fetching attendance data:", err);
    }
  };

  if (loading) return <div className="text-center text-2xl font-bold mt-10">Loading...</div>;
  if (error) return <div className="text-center text-2xl font-bold mt-10 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-black">Employee Profiles</h1>
      {profiles.map((profile, index) => (
        <div key={index} className="bg-blue-800 shadow-lg rounded-lg overflow-hidden mb-8 border border-gray-300">
          <div className="bg-blue-800 text-white p-6">
            <h2 className="text-3xl font-bold">{profile.employee.name}</h2>
          </div>
          <div className="p-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-1 ">
                <Section title="Employee Details">
                  <Detail label="Email" value={profile.employee.email} />
                  <Detail label="Department" value={profile.employee.department} />
                  <Detail label="Position" value={profile.employee.position_name} />
                </Section>

                <Section title="Contact Information">
                  {profile.contact && (
                    <>
                      <Detail label="Emergency Contact" value={profile.contact.emergency_contact_name} />
                      <Detail label="Relation" value={profile.contact.relation} />
                      <Detail label="Emergency Contact Number" value={profile.contact.emergency_contact_number} />
                    </>
                  )}
                </Section>

                <Section title="Education">
                  {profile.education && (
                    <>
                      <Detail label="Level" value={profile.education.education_level} />
                      <Detail label="Institution" value={profile.education.institution} />
                      <Detail label="Specialization" value={profile.education.specialization} />
                      <Detail label="Field of Study" value={profile.education.field_of_study} />
                      <Detail label="Year of Passing" value={profile.education.year_of_passing} />
                      <Detail label="Percentage" value={profile.education.percentage} />
                    </>
                  )}
                </Section>
              </div>

              <div className="col-span-1">
                <Section title="Emergency Contact">
                  {profile.emergency_contact && (
                    <>
                      <Detail label="Name" value={profile.emergency_contact.emergency_contact_name} />
                      <Detail label="Relation" value={profile.emergency_contact.relation} />
                      <Detail label="Number" value={profile.emergency_contact.emergency_contact_number} />
                    </>
                  )}
                </Section>

                <Section title="Dependents">
                  {profile.dependent && (
                    <>
                      <Detail label="Name" value={profile.dependent.dependent_name} />
                      <Detail label="Relation" value={profile.dependent.relation} />
                      <Detail label="Date of Birth" value={profile.dependent.date_of_birth} />
                    </>
                  )}
                </Section>

                <Section title="Skills">
                  {profile.skill && (
                    <>
                      <Detail label="Skill" value={profile.skill.skill} />
                      <Detail label="Certification" value={profile.skill.certification} />
                    </>
                  )}
                </Section>

                <Section title="Languages">
                  {profile.languages && (
                    <Detail label="Languages" value={profile.languages.languages} />
                  )}
                </Section>
              </div>

              <div className="col-span-1">
                <Section title="Employee Attendance">
                  <div className="h-[565px]">
                    <FullCalendar
                      plugins={[dayGridPlugin]}
                      initialView="dayGridMonth"
                      events={attendanceRecords[profile.employee.emloyee_id] || []}
                      height="100%"
                    />
                  </div>
                </Section>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b-2 border-blue-500 pb-2">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const Detail = ({ label, value }) => (
  <p className="text-gray-700">
    <span className="font-semibold text-blue-600">{label}:</span> {value || 'N/A'}
  </p>
);

export default EmployeeProfile;
