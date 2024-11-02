import React from 'react';

// Sample data for students and their grades
const grades = [
  {
    id: 1,
    studentName: 'Mutoni Jacky',
    subject: 'Software Development',
    grade: 'A',
  },
  {
    id: 2,
    studentName: 'Pascaline Jane',
    subject: 'Robotics',
    grade: 'B',
  },
  {
    id: 3,
    studentName: 'Asifiwe',
    subject: 'Cybersecurity',
    grade: 'A-',
  },
];

// GradeList component to display student grades
function GradeList() {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Student Grades</h2>
      <table className="min-w-full border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border border-gray-300">ID</th>
            <th className="p-4 border border-gray-300">Student Name</th>
            <th className="p-4 border border-gray-300">Subject</th>
            <th className="p-4 border border-gray-300">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade) => (
            <tr key={grade.id} className="hover:bg-gray-200">
              <td className="p-4 border border-gray-300">{grade.id}</td>
              <td className="p-4 border border-gray-300">{grade.studentName}</td>
              <td className="p-4 border border-gray-300">{grade.subject}</td>
              <td className="p-4 border border-gray-300">{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GradeList;
