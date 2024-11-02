import React from 'react';

// Updated students array with mentorId property
const students = [
  {
    id: 1,
    name: 'Mutoni Jacky',
    year: 'Sophomore',
    description: 'Jacky is exploring different fields in technology and is interested in learning about career options in software development.',
    interests: 'Software Development, Career Guidance, Web Development',
    sessionsBooked: 2,
    mentorId: 1, // Associated mentor ID
  },
  {
    id: 2,
    name: 'Pascaline Jane',
    year: 'Junior',
    description: 'Jane has a passion for robotics and is researching opportunities to study robotics in Rwanda and beyond.',
    interests: 'Robotics, Artificial Intelligence, Machine Learning',
    sessionsBooked: 4,
    mentorId: 2, // Associated mentor ID
  },
  {
    id: 3,
    name: 'Asifiwe',
    year: 'Senior',
    description: 'Alex is interested in building a strong foundation in programming to explore tech-based career paths.',
    interests: 'Programming, Career Development, Cybersecurity',
    sessionsBooked: 3,
    mentorId: 3, // Associated mentor ID
  },
];

// Assuming mentors is available in the same scope
const mentors = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
];

function Studentlist() {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <table className="min-w-full border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border border-gray-300">ID</th>
            <th className="p-4 border border-gray-300">Name</th>
            <th className="p-4 border border-gray-300">Year</th>
            <th className="p-4 border border-gray-300">Description</th>
            <th className="p-4 border border-gray-300">Interests</th>
            <th className="p-4 border border-gray-300">Sessions Booked</th>
            <th className="p-4 border border-gray-300">Mentor</th> {/* New column for Mentor */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            // Find the mentor for the current student
            const mentor = mentors.find(mentor => mentor.id === student.mentorId);
            return (
              <tr key={student.id} className="hover:bg-gray-200">
                <td className="p-4 border border-gray-300">{student.id}</td>
                <td className="p-4 border border-gray-300">{student.name}</td>
                <td className="p-4 border border-gray-300">{student.year}</td>
                <td className="p-4 border border-gray-300">{student.description}</td>
                <td className="p-4 border border-gray-300">{student.interests}</td>
                <td className="p-4 border border-gray-300">{student.sessionsBooked}</td>
                <td className="p-4 border border-gray-300">{mentor ? mentor.name : 'No Mentor'}</td> {/* Display mentor name */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Studentlist;
