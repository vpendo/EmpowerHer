import React from 'react';
import { FaGraduationCap, FaUsers, FaChartLine } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About EmpowerHer
          </h1>
          <p className="mt-16 max-w-xl mx-auto text-xl text-gray-500">
            Empowering women through education and Technology
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <FaGraduationCap className="h-12 w-12 text-indigo-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Expert-Led Courses</h3>
                <p className="mt-2 text-base text-gray-500">
                  Access high-quality online courses designed and taught by industry experts.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <FaUsers className="h-12 w-12 text-indigo-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Personalized Mentorship</h3>
                <p className="mt-2 text-base text-gray-500">
                  Connect with experienced mentors for one-on-one guidance and support.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <FaChartLine className="h-12 w-12 text-indigo-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Career Growth</h3>
                <p className="mt-2 text-base text-gray-500">
                  Develop skills and confidence to advance your career and achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10">


          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500">
              At EmpowerHer, we're dedicated to bridging the gender gap in various industries by providing women with the tools, knowledge, and support they need to succeed. Through our online courses and mentorship programs, we aim to create a community of empowered women who inspire and uplift each other.
            </p>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-gray-900">Join Our Community</h2>
            <p className="mt-4 text-lg text-gray-500">
              Whether you're just starting your career or looking to take it to the next level, EmpowerHer is here to support you every step of the way. Join our community of ambitious women and start your journey towards personal and professional growth today.
            </p>
            <div className="mt-8">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;