import React, { useContext, useEffect, useState } from 'react';
import LazyImage from '../../lazy-image';
import { ga, skeleton, truncate } from '../../../helpers/utils';
import { AiOutlineArrowDown } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { cardBgColor } from '../../../assets/style-const';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, easeOut, motion, useInView } from 'framer-motion';

export const ProjectCard = ({ project, projectCardClicked }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);
  const state = {
    project: project,
    isVisible: true,
  };

  const defaultAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const cardClickedAnimation = {
    initial: { opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: easeOut,
      },
    },
  };

  const [motionConfig, setMotionConfig] = useState({});

  useEffect(() => {
    setMotionConfig(defaultAnimation);
  }, []);

  return (
    <motion.div
      id={project.title}
      initial={motionConfig.initial}
      animate={motionConfig.animate}
      exit={motionConfig.exit}
      className="col-span-3 md:col-span-1 hover:scale-105 transition ease-in-out duration-150 shadow-md hover:shadow-lg "
    >
      <Link
        className={`card  compact cursor-pointer ${cardBgColor} `}
        key={project.title}
        to={'/projects/' + project.id}
        state={state}
        onClick={() => {
          projectCardClicked(true);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }}
      >
        <div className="p-5 h-36 w-full">
          <div className="flex items-left flex-col">
            <div className="block w-full">
              {loading ? (
                skeleton({
                  width: 'w-1/4',
                  height: 'h-4',
                  className: ' mb-5',
                })
              ) : (
                <h2 className="font-semibold text-lg tracking-wide text-left opacity-80 mb-2">
                  {project.title}
                </h2>
              )}
            </div>
            <div className="block w-full">
              {loading ? (
                skeleton({
                  width: 'w-3/4',
                  height: 'h-10',
                  className: '',
                })
              ) : (
                <p className="mt-1 text-base-content text-opacity-60 text-sm">
                  {project.short}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    stack: PropTypes.array,
    description: PropTypes.string,
    short: PropTypes.string,
    link: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
  projectCardClicked: PropTypes.any,
};

export default ProjectCard;
