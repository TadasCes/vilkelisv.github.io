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

export const AllProjects = ({ shownCount }) => {
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
    setComingFromSubPage(
      location.state.previousPath.includes('/projects/') ? true : false
    );
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
    <Card
      cardId="all-projects"
      customAnimation={
        projectCardClicked || comingFromSubPage
          ? motionConfigsFromSubTest
          : false
      }
    >
      <motion.div
        initial={projectCardClicked || comingFromSubPage ? { opacity: 0 } : {}}
        animate={
          projectCardClicked || comingFromSubPage
            ? {
                opacity: 1,
                transition: { duration: 0.3, ease: easeOut, delay: 0.2 },
              }
            : {}
        }
        exit={
          projectCardClicked || comingFromSubPage
            ? { opacity: 0, transition: { ...customTransition, delay: 0.5 } }
            : {}
        }
      >
        <CardTitle text={'Projects'} loading={loading} big={true} />
        <div className="col-span-2 gap-6 ">
          <div className="p-5">
            {projects.map((item, index) =>
              index < shownCount ? (
                <ProjectCard
                  key={index}
                  loading={loading}
                  project={item}
                  projectCardClicked={setProjectCardClicked}
                />
              ) : (
                ''
              )
            )}
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

AllProjects.propTypes = {
  projects: PropTypes.array,
  shownCount: PropTypes.number,
  loading: PropTypes.bool,
  comingFromSubPage: PropTypes.any,
};

export default AllProjects;
