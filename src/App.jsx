import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Project } from './components/Projects/project/Project';
import AllProjects from './components/Projects/all-projects';
import { Home } from './components/Home';
import config from '../gitprofile.config';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { bgColor } from './assets/style-const';

function App() {
  const location = useLocation();
  useEffect(() => {
    location.state.previousPath = '/';
  }, []);

  return (
    <>
      <div className={`${bgColor}`}>
        <AnimatePresence mode="wait" initial={true}>
          <Routes location={location} key={location.key}>
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/projects/" element={<AllProjects />} />
            <Route path="/" element={<Home config={config} />} />
            <Route path="/1" element={<Home config={config} />} />
            <Route path="/2" element={<Home config={config} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
