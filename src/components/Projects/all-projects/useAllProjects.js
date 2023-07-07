import { useContext, useEffect, useState } from 'react';
import { easeOut } from 'framer-motion';
import { LayoutContext } from '../../../context/LayoutContext';
import { useLocation } from 'react-router-dom';

export const useAllProjects = () => {
  const layoutContext = useContext(LayoutContext);
  const [distance, setDistance] = useState(0);
  const location = useLocation();
  const [projectCardClicked, setProjectCardClicked] = useState(false);
  const [comingFromSubPage, setComingFromSubPage] = useState(false);
  const [triggerCustomAnimation, setTriggerCustomAnimation] = useState(false);

  useEffect(() => {
    setDistance(-Math.abs(layoutContext.allProjectsCardDistance));
    setComingFromSubPage(
      location.state.previousPath.includes('/projects/') ? true : false
    );
    triggerCustomAnimation;
  }, [location]);

  const customTransition = {
    duration: 0.5,
    ease: easeOut,
  };

  useEffect(() => {
    console.log(projectCardClicked || comingFromSubPage);
    setTriggerCustomAnimation(projectCardClicked || comingFromSubPage);
  }, [location]);

  useEffect(() => {
    setProjectCardClicked(false);
  }, []);

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

  return {
    projectCardClicked,
    comingFromSubPage,
    setProjectCardClicked,
    customTransition,
    motionConfigsFromSubTest,
    triggerCustomAnimation,
    distance,
  };
};
