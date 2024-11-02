import React from 'react';

// Sample data for the progress list
const progressList = [
  {
    studentName: 'Mutoni Jacky',
    enrolledCourses: [
      { courseName: 'Software Development', progress: 'In Progress' },
      { courseName: 'Web Development', progress: 'Completed' },
    ],
  },
  {
    studentName: 'Pascaline Jane',
    enrolledCourses: [
      { courseName: 'Robotics', progress: 'Completed' },
      { courseName: 'Artificial Intelligence', progress: 'In Progress' },
    ],
  },
  {
    studentName: 'Asifiwe',
    enrolledCourses: [
      { courseName: 'Cybersecurity', progress: 'In Progress' },
      { courseName: 'Data Science', progress: 'Not Started' },
    ],
  },
];

// ProgressList component to display student progress
function ProgressList() {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Student Progress List</h2>
      <table className="min-w-full border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border border-gray-300">Student Name</th>
            <th className="p-4 border border-gray-300">Course Name</th>
            <th className="p-4 border border-gray-300">Progress</th>
          </tr>
        </thead>
        <tbody>
          {progressList.map((student, index) =>
            student.enrolledCourses.map((course, courseIndex) => (
              <tr key={`${index}-${courseIndex}`} className="hover:bg-gray-200">
                <td className="p-4 border border-gray-300">{student.studentName}</td>
                <td className="p-4 border border-gray-300">{course.courseName}</td>
                <td className="p-4 border border-gray-300">{course.progress}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProgressList;
