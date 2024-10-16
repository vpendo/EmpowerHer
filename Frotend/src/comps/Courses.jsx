import React from 'react';

export const Courses = () => {
  const courses = [
    {
      id: 1,
      image: 'https://decentinstitute.in/wp-content/uploads/2022/10/html-css-javascript.webp',
      title: 'Web Development',
      description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript.',
      date: '1/11/2024',
    },
    {
      
        "id": 2,
        "image": "https://i1.wp.com/sthua.edu.sg/wp-content/uploads/2016/08/python1-logo1.png?fit=895%2C342&ssl=1",
        "title": "Python Programming",
        "description": "Learn Python programming from scratch, covering fundamentals, data structures, and application development.",
        "date": "1/11/2024"
      
    },
    {
      id: 3,
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20210910/pngtree-ui-ux-mobile-development-design-gradient-concept-image_860926.jpg',
      title: 'UI/UX Design',
      description: 'Design user-friendly and aesthetically pleasing interfaces.',
      date: '1/11/2024',
    },
    {
      "id": 4,
      "image": "https://i.pcmag.com/imagery/reviews/00Z1mnZCcGR9r9D5hNbsFbW-36.fit_lim.size_1050x591.v1612863800.jpg",  // Example Wix logo URL
      "title": " Web Design with Wix",
      "description": "Learn to create stunning websites quickly and easily with Wix, a powerful no-code platform that offers a range of customizable templates and design tools.",
      "date": "1/11/2024"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>

      {/* Responsive 4-Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 text-sm">{course.date}</span>
                <button className="hover:bg-blue-500  px-4 py-2 rounded-lg hover:text-white text-blue-500 text-sm transition duration-300">
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
