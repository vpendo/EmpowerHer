import React from 'react'; 

// Updated mentors array with image property
const mentors = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Senior Software Engineer',
    description: 'Alice has over 10 years of experience in software development, specializing in backend technologies.',
    expertise: 'Backend Development, Cloud Computing, DevOps',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Bob Smith',
    title: 'Product Manager',
    description: 'Bob has a strong background in product management, leading teams to deliver user-centered products.',
    expertise: 'Product Management, UX Design, Agile Methodologies',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Charlie Brown',
    title: 'Data Scientist',
    description: 'Charlie has a passion for data and analytics, helping organizations make data-driven decisions.',
    expertise: 'Data Science, Machine Learning, Statistics',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const Mentors = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Our Mentors</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentors.map((mentor) => (
          <li key={mentor.id} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
            <img src={mentor.image} alt={`${mentor.name}`} className="w-32 h-32 rounded-full mb-4" />
            <h3 className="text-xl font-semibold">{mentor.name}</h3>
            <p className="text-gray-700">{mentor.title}</p>
            <p className="text-gray-600 mt-2">{mentor.description}</p>
            <p className="text-gray-500 mt-1">Expertise: {mentor.expertise}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Book a Session
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mentors;
