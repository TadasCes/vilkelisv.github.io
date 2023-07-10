import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Project } from './components/Projects/project/Project';
import AllProjects from './components/Projects/all-projects';
import { Home } from './components/Home';
import config from '../gitprofile.config';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { bgColor } from './assets/style-const';
import ErrorPage from './components/error-page';

function App() {
  return (
    <div className={`${bgColor} min-h-screen h-full`}>
      <div className={`p-10 xl:p-10 min-h-full xl:w-3/4 xl:mx-auto`}>
        <AnimatePresence mode="wait" initial={true}>
          <Routes location={location} key={location.key}>
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/projects/" element={<AllProjects />} />
            <Route path="/" element={<Home config={config} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
