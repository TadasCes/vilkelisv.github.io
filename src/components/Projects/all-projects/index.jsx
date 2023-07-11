import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ga, skeleton } from '../../../helpers/utils';
import ProjectCard from '../project-card';
import { Card } from '../../layout/card';
import { easeOut, motion } from 'framer-motion';
import { LayoutContext } from '../../../context/LayoutContext';
import { useLocation } from 'react-router-dom';
import { cardBgColor } from '../../../assets/style-const';
import dataConfig from '../../../../data.configs';
import { CardTitle } from '../../layout/card/card-components';

export const AllProjects = () => {
  const projects = dataConfig.projects;
  const [loading, setLoading] = useState(true);
  const layoutContext = useContext(LayoutContext);
  const [distance, setDistance] = useState(0);
  const location = useLocation();
  const [projectCardClicked, setProjectCardClicked] = useState(false);
  const [comingFromSubPage, setComingFromSubPage] = useState(false);
  const triggerCustomAnimation = projectCardClicked || comingFromSubPage;

  useEffect(() => {
    setDistance(-Math.abs(layoutContext.allProjectsCardDistance));

    triggerCustomAnimation;
    setLoading(false);
  }, [location]);

  const customTransition = {
    duration: 0.5,
    ease: easeOut,
  };

  const motionConfigsCardClicked = {
    initial: {
      x: 0,
    },
    animate: {
      x: 0,
      transition: customTransition,
    },
    exit: {
      height: '800px',
      transition: { ...customTransition, delay: 0.8 },
      y: projectCardClicked && distance,
    },
  };

  const motionConfigsFromSub = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: customTransition,
    },
    exit: {
      transition: { ...customTransition, delay: 0.8 },
    },
  };

  const motionConfigsFromSubTest = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: easeOut, delay: 0.2 },
      y: projectCardClicked && distance,
    },
    exit: {
      height: '800px',
      transition: { duration: 0.5, ease: easeOut, delay: 0.5 },
      y: projectCardClicked && distance,
    },
  };

  return (
    <>
      {!loading && (
        <Card cardId="all-projects">
          <CardTitle text={'Projects'} loading={loading} big={true} />
          <div className="col-span-2 gap-6 ">
            <div className="p-5 grid grid-cols-3 gap-6">
              {projects.map((item, index) => (
                <ProjectCard
                  key={index}
                  loading={loading}
                  project={item}
                  projectCardClicked={setProjectCardClicked}
                />
              ))}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

AllProjects.propTypes = {
  projects: PropTypes.array,
  loading: PropTypes.bool,
  comingFromSubPage: PropTypes.any,
};

export default AllProjects;
