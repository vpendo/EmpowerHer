import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './dashcomp/MainTemplate';
import { LandingPage } from './Pages/LandingPage';
import AboutUs from './comps/About';
import CourseView from './Pages/CourseView';
import { ServicePage } from './Pages/ServicesPage';
import Register from './comps/Register';
import { Mentorships } from './Pages/MentorshipsList';
import Login from './comps/Login';


// Context for theme and user information
export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

function App() {
  const t = {
    SomethingWentWrong: "Something went wrong while decrypting data.",
  };
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("user"));
  const [userInfo, setInfoUser] = useState(null);

  // Context value to provide
  const themeContextValue = {
    userInfo,
    setInfoUser,
    isAdmin, 
    setIsAdmin
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/course" element={<CourseView />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mentorship" element={<Mentorships />} />
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
