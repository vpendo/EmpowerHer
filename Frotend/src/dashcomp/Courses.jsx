import React, { useState } from 'react';
import { Calendar, Search, Layout, List } from 'lucide-react';

const Courses = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('title');
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(null);

  const initialCourses = [
    {
      id: 1,
      title: "React Development Masterclass",
      description: "Master modern React development with hooks, context, and advanced patterns. Learn to build scalable applications.",
      date: "2024-11-01",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.8,
      enrolled: 1250,
      price: 99.99,
      image: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
      lectures: [
        "Modern React Fundamentals",
        "Hooks Deep Dive",
        "State Management with Context",
        "Performance Optimization"
      ],
      requirements: [
        "Strong JavaScript knowledge",
        "Basic React experience",
        "Understanding of ES6+"
      ],
      outcomes: [
        "Build complex React applications",
        "Implement advanced state management",
        "Master React performance optimization"
      ],
      materials: [
        "HD Video lectures",
        "Interactive coding exercises",
        "Project source code",
        "Certificate of completion"
      ]
    },
    {
      id: 2,
      title: "Python for Data Science",
      description: "Comprehensive Python programming for data analysis and machine learning fundamentals.",
      date: "2024-10-15",
      instructor: "Michael Chen",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      enrolled: 2100,
      price: 89.99,
      image: "https://www.svgrepo.com/show/376344/python.svg",
      lectures: [
        "Python Fundamentals",
        "NumPy and Pandas",
        "Data Visualization",
        "Machine Learning Basics"
      ],
      requirements: [
        "Basic programming knowledge",
        "Mathematics fundamentals"
      ],
      outcomes: [
        "Analyze data with Python",
        "Build ML models",
        "Create data visualizations"
      ],
      materials: [
        "Video tutorials",
        "Practice datasets",
        "Jupyter notebooks"
      ]
    },
    {
    id: 3, 
    title: "Introduction to Robotics",
    description: "Explore the fundamentals of robotics, including robot design, programming, and control systems. Gain hands-on experience with building and programming robots.",
    date: "2024-11-15",
    instructor: "Alice Green",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.6,
    enrolled: 950,
    price: 89.99,
    image: "https://up-board.org/wp-content/uploads/2022/08/03_UP-Xtreme-i11-Robotic-Development-Kit-1024x1024.png",
    lectures: [
      "Basics of Robotics",
      "Sensors and Actuators",
      "Robot Programming",
      "Control Systems"
    ],
    requirements: [
      "Basic programming skills",
      "Understanding of electronics"
    ],
    outcomes: [
      "Build and program basic robots",
      "Understand robotics applications",
      "Work with sensors and actuators"
    ],
    materials: [
      "Robotics kits",
      "Video tutorials",
      "Project documentation"
    ]
  }
];

 

  const [courses, setCourses] = useState(initialCourses);

  const sortCourses = (coursesToSort) => {
    return [...coursesToSort].sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'enrolled':
          return b.enrolled - a.enrolled;
        default:
          return a.title.localeCompare(b.title);
      }
    });
  };

  const filteredAndSortedCourses = sortCourses(
    courses.filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-blue-500">Course Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="title">Sort by Title</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="enrolled">Sort by Popularity</option>
              </select>
              <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                >
                  <Layout className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {course.level}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600">{course.rating}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-600">{course.enrolled} students</span>
                    </div>
                    <span className="text-blue-500 font-bold">${course.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="text-blue-500 hover:text-blue-600 font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredAndSortedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full md:w-48 h-48 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {course.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <span className="text-gray-500">Instructor</span>
                        <p className="font-medium">{course.instructor}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration</span>
                        <p className="font-medium">{course.duration}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Rating</span>
                        <p className="font-medium">★ {course.rating}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Price</span>
                        <p className="font-medium text-blue-500">${course.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="text-blue-500 hover:text-blue-600 font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">About This Course</h3>
                  <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {selectedCourse.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">What You'll Learn</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {selectedCourse.outcomes.map((outcome, idx) => (
                          <li key={idx}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Course Content</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Lectures</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {selectedCourse.lectures.map((lecture, idx) => (
                          <li key={idx}>{lecture}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Course Materials</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {selectedCourse.materials.map((material, idx) => (
                          <li key={idx}>{material}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-900 font-medium">Price</span>
                        <span className="text-blue-500 font-bold text-xl">
                          ${selectedCourse.price}
                        </span>
                      </div>
                      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;