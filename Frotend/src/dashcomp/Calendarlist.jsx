import React from 'react';

// Sample data for students and sessions
const students = [
  { id: 1, name: 'Mutoni Jacky' },
  { id: 2, name: 'Pascaline Jane' },
  { id: 3, name: 'Asifiwe' },
];

const schedule = [
  {
    id: 1,
    mentorName: 'Alice Johnson',
    studentId: 1,
    date: '2024-11-01',
    time: '10:00 AM',
    duration: '1 hour',
  },
  {
    id: 2,
    mentorName: 'Alice Johnson',
    studentId: 2,
    date: '2024-11-01',
    time: '11:00 AM',
    duration: '1 hour',
  },
  {
    id: 3,
    mentorName: 'Bob Smith',
    studentId: 3,
    date: '2024-11-02',
    time: '1:00 PM',
    duration: '1 hour',
  },
];

// CalendarList component to display scheduled sessions
function CalendarList() {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Scheduled Sessions</h2>
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
            const student = students.find((s) => s.id === session.studentId);
            return (
              <tr key={session.id} className="hover:bg-gray-200">
                <td className="p-4 border border-gray-300">{session.mentorName}</td>
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

export default CalendarList;
