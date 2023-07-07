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
    position: {},
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
    >
      <Link
        className={`card shadow-lg compact cursor-pointer mb-5 ${cardBgColor}`}
        key={project.title}
        to={project.link}
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
        <div className="p-8  h-full w-full">
          <div className="flex items-left flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-left w-full ">
                  <div className="grid grid-cols-10 ">
                    <div className="w-fit col-span-1">
                      {project.imageUrl && (
                        <div className="avatar opacity-90">
                          <div className="w-20 h-20 mask mask-squircle">
                            <LazyImage
                              src={project.imageUrl}
                              alt={'thumbnail'}
                              placeholder={skeleton({
                                width: 'w-full',
                                height: 'h-full',
                                shape: '',
                              })}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className=" ml-5 col-span-8">
                      <div className="block w-full">
                        {loading ? (
                          skeleton({
                            width: 'w-1/4',
                            height: 'h-4',
                            className: ' mb-5',
                          })
                        ) : (
                          <h2 className="font-semibold text-lg tracking-wide text-left opacity-60 mb-2">
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
                            {truncate(project.description, 100, true)}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-self-center self-center">
                      {loading ? (
                        skeleton({
                          width: 'w-full',
                          height: 'h-4',
                          className: 'mx-auto rounded-full p-5',
                        })
                      ) : (
                        <button className="rounded-full p-3 font-semibold transition ease-in-out drop-shadow-md bg-blue-500 hover:bg-blue-600 hover:drop-shadow-lg hover:scale-110">
                          <AiOutlineArrowDown
                            size="20px"
                            className="text-white"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    index: PropTypes.number,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    stack: PropTypes.array,
    description: PropTypes.string,
    link: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
  projectCardClicked: PropTypes.any,
};

export default ProjectCard;
