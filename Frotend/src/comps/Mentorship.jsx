import React from 'react';

export const Mentorship = () => {
  const mentorships = [
    {
      id: 1,
      image: 'https://www.packard.org/wp-content/uploads/2023/12/https___www.imagesofempowerment.org_wp-content_uploads_D_PA-1799312_347-scaled-1-1536x1024.jpg',
      title: 'Career Coaching',
      description: 'Get guidance to help you navigate your career path and achieve your goals.',
    },
    {
      id: 2,
      image: 'https://il-app.s3.ap-south-1.amazonaws.com/images/Supriya-Course-Image-720x405-d58bd5bef26842fa9f78a97ead33b287.png',
      title: 'Startup Mentorship',
      description: 'Learn how to build, grow, and scale your startup with experienced mentors.',
    },
    {
      id: 3,
      image: 'https://www.packard.org/wp-content/uploads/2023/12/https___www.imagesofempowerment.org_wp-content_uploads_D_PA-1799312_347-scaled-1-1536x1024.jpg',
      title: 'Leadership Development',
      description: 'Become a more effective leader with personalized leadership coaching.',
    },
    {
      id: 4,
      image: 'https://ischoolconnect.com/blog/wp-content/uploads/2022/07/mentor-meaning.png',
      title: 'Personal Growth',
      description: 'Explore self-improvement and personal growth with the help of a mentor.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Mentorship Programs</h2>

      {/* Responsive 4-Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mentorships.map((mentorship) => (
          <div
            key={mentorship.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img src={mentorship.image} alt={mentorship.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{mentorship.title}</h3>
              <p className="text-gray-600 mb-4">{mentorship.description}</p>
              <div className="flex justify-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
