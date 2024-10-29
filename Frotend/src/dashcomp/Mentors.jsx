import React from 'react'; 

// Updated mentors array with image property
const mentors = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Senior Software Engineer',
    description: 'Alice has over 10 years of experience in software development, specializing in backend technologies.',
    expertise: 'Backend Development, Cloud Computing, DevOps',
    image: 'https://www.packard.org/wp-content/uploads/2023/12/https___www.imagesofempowerment.org_wp-content_uploads_D_PA-1799312_347-scaled-1-1536x1024.jpg', 
  },
  {
    id: 2,
    name: 'Bob Smith',
    title: 'Product Manager',
    description: 'Bob has a strong background in product management, leading teams to deliver user-centered products.',
    expertise: 'Product Management, UX Design, Agile Methodologies',
    image: 'https://il-app.s3.ap-south-1.amazonaws.com/images/Supriya-Course-Image-720x405-d58bd5bef26842fa9f78a97ead33b287.png',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    title: 'Data Scientist',
    description: 'Charlie has a passion for data and analytics, helping organizations make data-driven decisions.',
    expertise: 'Data Science, Machine Learning, Statistics',
    image: 'https://www.packard.org/wp-content/uploads/2023/12/https___www.imagesofempowerment.org_wp-content_uploads_D_PA-1799312_347-scaled-1-1536x1024.jpg',
  },
];

const Mentors = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Our Mentors</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border border-gray-300">Image</th>
            <th className="p-4 border border-gray-300">Name</th>
            <th className="p-4 border border-gray-300">Title</th>
            <th className="p-4 border border-gray-300">Description</th>
            <th className="p-4 border border-gray-300">Expertise</th>
            <th className="p-4 border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((mentor) => (
            <tr key={mentor.id} className="hover:bg-gray-50">
              <td className="p-4 border border-gray-300">
                <img src={mentor.image} alt={`${mentor.name}`} className="w-16 h-16 rounded-full" />
              </td>
              <td className="p-4 border border-gray-300">{mentor.name}</td>
              <td className="p-4 border border-gray-300">{mentor.title}</td>
              <td className="p-4 border border-gray-300">{mentor.description}</td>
              <td className="p-4 border border-gray-300">{mentor.expertise}</td>
              <td className="p-4 border border-gray-300">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Book a Session
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mentors;
