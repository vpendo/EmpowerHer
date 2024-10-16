import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import { AboutUs } from './Pages/AboutUsi';
import CourseView from './Pages/CourseView';
import Services from './comps/Servies';
import { ServicePage } from './Pages/ServicesPage';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage   />} />
        <Route path="/home" element={<LandingPage   />} />
        <Route path="/about" element={<AboutUs   />} />
        <Route path="/course" element={<CourseView   />} />
        <Route path="/services" element={<ServicePage  />} />
      </Routes>
    </Router>
  );
}

export default App;
