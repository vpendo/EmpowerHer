import React from 'react';
import { FaBook, FaUserFriends, FaCalendarCheck } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description, price, buttonText }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <Icon className="h-12 w-12 text-indigo-500 mb-4" />
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
      <p className="mt-4 text-xl font-semibold text-gray-900">{price}</p>
      <div className="mt-4">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Discover our range of online courses and mentorship programs
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={FaBook}
              title="Online Courses"
              description="Access a wide range of self-paced online courses covering various topics in leadership, technology, and personal development."
              price="Starting at $80"
              buttonText="Browse Courses"
            />

            <ServiceCard
              icon={FaUserFriends}
              title="1:1 Mentorship"
              description="Book personalized mentorship sessions with experienced professionals in your field for guidance and career advice."
              price="$40 per session"
              buttonText="Find a Mentor"
            />

            <ServiceCard
              icon={FaCalendarCheck}
              title="Group Workshops"
              description="Join interactive group workshops led by industry experts, focusing on skill-building and networking."
              price="$60 per workshop"
              buttonText="View Schedule"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                1
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Choose Your Service</h3>
              <p className="mt-2 text-base text-gray-500">
                Select from our range of online courses, mentorship sessions, or workshops.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                2
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Book Your Session</h3>
              <p className="mt-2 text-base text-gray-500">
                Choose a convenient time slot and complete the booking process.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                3
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Start Learning</h3>
              <p className="mt-2 text-base text-gray-500">
                Begin your journey of growth and empowerment with our expert-led content.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-gray-500">
            Take the first step towards your personal and professional growth with EmpowerHer.
          </p>
          <div className="mt-8">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Create Your Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;