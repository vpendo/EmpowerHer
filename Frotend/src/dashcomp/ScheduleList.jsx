import React from 'react';

// Sample students data
const students = [
  {
    id: 1,
    name: 'Mutoni Jacky',
    year: 'Sophomore',
  },
  {
    id: 2,
    name: 'Pascaline Jane',
    year: 'Junior',
  },
  {
    id: 3,
    name: 'Asifiwe',
    year: 'Senior',
  },
];

// Sample mentors data
const mentors = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
];

// Sample schedule data
const schedule = [
  {
    id: 1,
    mentorId: 1,
    studentId: 1,
    date: '2024-11-01',
    time: '10:00 AM',
    duration: '1 hour',
  },
  {
    id: 2,
    mentorId: 1,
    studentId: 2,
    date: '2024-11-02',
    time: '11:00 AM',
    duration: '1 hour',
  },
  {
    id: 3,
    mentorId: 2,
    studentId: 3,
    date: '2024-11-03',
    time: '1:00 PM',
    duration: '1 hour',
  },
];

// ScheduleList component
function ScheduleList() {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mentorship Schedule</h2>
      <table className="min-w-full border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border border-gray-300">Mentor Name</th>
            <th className="p-4 border border-gray-300">Student Name</th>
            <th className="p-4 border border-gray-300">Date</th>
            <th className="p-4 border border-gray-300">Time</th>
            <th className="p-4 border border-gray-300">Duration</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((session) => {
            const mentor = mentors.find((m) => m.id === session.mentorId);
            const student = students.find((s) => s.id === session.studentId);

            return (
              <tr key={session.id} className="hover:bg-gray-200">
                <td className="p-4 border border-gray-300">{mentor ? mentor.name : 'Unknown Mentor'}</td>
                <td className="p-4 border border-gray-300">{student ? student.name : 'Unknown Student'}</td>
                <td className="p-4 border border-gray-300">{session.date}</td>
                <td className="p-4 border border-gray-300">{session.time}</td>
                <td className="p-4 border border-gray-300">{session.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleList;
