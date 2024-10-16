import React, { useState } from 'react';
import { FaSearch, FaFilter, FaStar } from 'react-icons/fa';

// Mock data for courses
const coursesData = [
  { 
    id: 1, 
    title: 'Introduction to Leadership', 
    category: 'Leadership', 
    level: 'Beginner', 
    price: 99, 
    rating: 4.5, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrA5d_yoCkxMhs9VNkW1vg35pncTneL5X0uOKFu7k2WObGmYxJ0jgDkaMCgtSEIp_CoE&usqp=CAU'
  },
  { 
    id: 2, 
    title: 'Advanced Web Development', 
    category: 'Technology', 
    level: 'Advanced', 
    price: 129, 
    rating: 4.8, 
    image: 'https://www.creativeitinstitute.com/images/course/course_1663052056.jpg'
  },
  { 
    id: 3, 
    title: 'Personal Branding Mastery', 
    category: 'Career Development', 
    level: 'Intermediate', 
    price: 129, 
    rating: 4.6, 
    image: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_5_31_638527891895302614_personal-brand.jpg'
  },
  { 
    id: 4, 
    title: 'Data Science Fundamentals', 
    category: 'Technology', 
    level: 'Beginner', 
    price: 199, 
    rating: 4.9, 
    image: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0.jpg'
  },
  { 
    id: 5, 
    title: 'Marketing Strategies for 2024', 
    category: 'Business', 
    level: 'Intermediate', 
    price: 119, 
    rating: 4.3, 
    image: 'https://smartreach.io/blog/wp-content/uploads/2023/10/Cold-Email-Masterclass-18.png'
  },
  { 
    id: 6, 
    title: 'Introduction to Python', 
    category: 'Technology', 
    level: 'Beginner', 
    price: 89, 
    rating: 4.7, 
    image: 'https://ytimg.googleusercontent.com/vi/uYjRzbP5aZs/maxresdefault.jpg'
  },
  { 
    id: 7, 
    title: 'Digital Marketing Basics', 
    category: 'Marketing', 
    level: 'Beginner', 
    price: 79, 
    rating: 4.2, 
    image: 'https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg'
  },
  { 
    id: 8, 
    title: 'JavaScript Mastery', 
    category: 'Technology', 
    level: 'Advanced', 
    price: 99, 
    rating: 4.9, 
    image: 'https://learn.edure.in/s/store/courses/636a0431e4b00641d2596354/cover.jpg?v=3'
  },
  { 
    id: 9, 
    title: 'Content Creation 101', 
    category: 'Media', 
    level: 'Beginner', 
    price: 100, 
    rating: 4.4, 
    image: 'https://images.squarespace-cdn.com/content/v1/5983753d893fc053508807d7/1622563358532-IQU9R7L1XFAOK975FD67/Types+of+Content+Creation+with+Dion+Marketing'
  },
  { 
    id: 10, 
    title: 'Cybersecurity Essentials', 
    category: 'Technology', 
    level: 'Intermediate', 
    price: 100, 
    rating: 4.5, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BKyZk7T4dZWB9sE7B3dxn0oSkYRnNTPh2A&s'
  },
  { 
    id: 11, 
    title: 'Graphic Design Basics', 
    category: 'Design', 
    level: 'Beginner', 
    price: 99, 
    rating: 4.7, 
    image: 'https://i.ytimg.com/vi/GQS7wPujL2k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCa0PucUhUetNvEigfKTGUS89VB4A'
  },
  { 
    id: 12, 
    title: 'Photography Masterclass', 
    category: 'Media', 
    level: 'Advanced', 
    price: 89, 
    rating: 4.8, 
    image: 'https://i.udemycdn.com/course/480x270/1462428_639f_7.jpg'
  },
  { 
    id: 13, 
    title: 'Cloud Computing Essentials', 
    category: 'Technology', 
    level: 'Intermediate', 
    price: 107, 
    rating: 4.6, 
    image: 'https://strucsoftsolutions.com/wp-content/uploads/2023/02/elements_of_cloud_computing_2021-1024x689.png'
  },
  { 
    id: 14, 
    title: 'Project Management 101', 
    category: 'Business', 
    level: 'Beginner', 
    price: 102, 
    rating: 4.3, 
    image: 'https://media.licdn.com/dms/image/D4D12AQHAzpZZDBIkfA/article-cover_image-shrink_720_1280/0/1710486640359?e=2147483647&v=beta&t=_kP7RyfolRjZCXpwZO3GJqC4Trnozc_G8gP1uCmzilc'
  },
  { 
    id: 15, 
    title: 'Machine Learning Basics', 
    category: 'Technology', 
    level: 'Advanced', 
    price: 120, 
    rating: 4.9, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnY_erSTNXkw3Gd5I3ICpPPAoVsLT5AlPnw&s'
  },
  { 
    id: 16, 
    title: 'SEO Mastery', 
    category: 'Marketing', 
    level: 'Intermediate', 
    price: 99, 
    rating: 4.5, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL52R3FFmjZbqUHsDM9fKi6af55GxMM2-p4tLigBCTTQkuCa7QEQc34iHPdDptvb0KVto&usqp=CAU'
  },
  { 
    id: 17, 
    title: 'Artificial Intelligence for Everyone', 
    category: 'Technology', 
    level: 'Beginner', 
    price: 125, 
    rating: 4.8, 
    image: 'https://dw1.s81c.com/developer-static-pages/default/en/generative-ai-for-developers/images/AI-CARD-2.jpg'
  },
  { 
    id: 18, 
    title: 'Ethical Hacking Basics', 
    category: 'Technology', 
    level: 'Advanced', 
    price: 130, 
    rating: 4.7, 
    image: 'https://thecyberexpress.com/wp-content/uploads/Who-Are-Hackers.png'
  },
  { 
    id: 19, 
    title: 'Social Media Marketing', 
    category: 'Marketing', 
    level: 'Beginner', 
    price: 70, 
    rating: 4.6, 
    image: 'https://www.big-red-digital.com/images/blogimages/social-media-networks.jpg'
  },
  { 
    id: 20, 
    title: 'E-commerce Strategies', 
    category: 'Business', 
    level: 'Intermediate', 
    price: 99, 
    rating: 4.4, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2n90sG3uFr6PSNqKOwF14Ye9GEXK1ceg_g&s'
  },
];


const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Filter courses based on search term and selected filters
  const filteredCourses = coursesData.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || course.category === selectedCategory) &&
    (selectedLevel === '' || course.level === selectedLevel) &&
    (selectedPrice === '' || course.price <= parseInt(selectedPrice))
  );

  // Get current courses for pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Our Courses</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="relative flex-grow mb-4 md:mb-0 md:mr-4">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex items-center">
              <FaFilter className="mr-2 text-indigo-500" />
              <span className="font-medium">Filters:</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Leadership">Leadership</option>
              <option value="Technology">Technology</option>
              <option value="Career Development">Career Development</option>
            </select>
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="100">Under $100</option>
              <option value="150">Under $150</option>
              <option value="200">Under $200</option>
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {currentCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-[210px] overflow-hidden">
                <img src={course.image} alt="" className='w-full h-full object-cover' />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.category}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2 py-1 rounded">
                    {course.level}
                  </span>
                  <span className="text-gray-900 font-bold">${course.price}</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-gray-700">{course.rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {Array.from({ length: Math.ceil(filteredCourses.length / coursesPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  currentPage === index + 1
                    ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;