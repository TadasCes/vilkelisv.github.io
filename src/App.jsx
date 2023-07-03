import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Project } from './components/Projects/project/Project';
import AllProjects from './components/Projects/all-projects';
import Home from './components/Home';
import config from '../gitprofile.config';

function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  return (
    <>
      <div>
        <Routes location={location}>
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/projects/" element={<AllProjects />} />
          <Route path="/" element={<Home config={config} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
