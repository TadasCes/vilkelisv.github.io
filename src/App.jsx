import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Project } from './components/Projects/project/Project';
import AllProjects from './components/Projects/all-projects';
import { Home } from './components/Home';
import config from '../gitprofile.config';
import { AnimatePresence } from 'framer-motion';
import Foo from './components/layout/foo';
import Bar from './components/layout/bar';
import PropTypes from 'prop-types';
import { bgColor } from './assets/style-const';

const LocationProvider = ({ children }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
};

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="/projects/:id" element={<Project />} />
      <Route path="/projects/" element={<AllProjects />} />
      <Route path="/foo/" element={<Foo />} />
      <Route path="/bar/" element={<Bar />} />
      <Route path="/" element={<Home config={config} />} />
    </Routes>
  );
};

function App() {
  const location = useLocation();
  return (
    <>
      <div className={`${bgColor}`}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.key}>
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/projects/" element={<AllProjects />} />
            <Route path="/foo/" element={<Foo />} />
            <Route path="/bar/" element={<Bar />} />
            <Route path="/" element={<Home config={config} />} />
          </Routes>
        </AnimatePresence>
        {/* <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider> */}
      </div>
    </>
  );
}

LocationProvider.propTypes = {
  children: PropTypes.any,
};

export default App;
