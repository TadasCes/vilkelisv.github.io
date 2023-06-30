import { Fragment } from 'react';
import config from '../gitprofile.config';
import GitProfile from './components/GitProfile';
import { Routes, Route, Link } from 'react-router-dom';
import { Project } from './components/Projects/project/Project';
import { AllProjects } from './components/Projects/all-projects/AllProjects';

function App() {
  return (
    <Fragment>
      <div>
        <Routes>
          <Route path="/project/:id" element={<Project config={config} />} />
          <Route path="/project/" element={<AllProjects config={config} />} />
          <Route path="/" element={<GitProfile config={config} />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
