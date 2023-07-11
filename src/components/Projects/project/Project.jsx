/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { skeleton, truncate } from '../../../helpers/utils';
import { cardBgColor } from '../../../assets/style-const';
import { BtnBack } from '../../buttons/btn-back/BtnBack';
import LazyImage from '../../lazy-image';
import { motion, easeOut, usePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { LayoutContext } from '../../../context/LayoutContext';
import { BtnNavigate } from '../../buttons/btn-navigate/BtnNavigate';
import { CardContent, CardTitle } from '../../layout/card/card-components';

export const Project = () => {
  const layoutContext = useContext(LayoutContext);
  const { location, state, key, pathname } = useLocation();
  console.log(state);
  const project = state.project;
  const isVisible = state.isVisible;
  const [loading, setLoading] = useState(false);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);

  const renderSkeleton = () => {
    return (
      <div className="card shadow-lg compact bg-base-100">
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="flex items-start px-4">
                <div className="w-full">
                  <h2>
                    {skeleton({
                      width: 'w-32',
                      height: 'h-8',
                      className: 'mb-2 mx-auto',
                    })}
                  </h2>
                  <div className="avatar w-full h-full">
                    <div className="w-20 h-20 mask mask-squircle mx-auto">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-full',
                        shape: '',
                      })}
                    </div>
                  </div>
                  <div className="mt-2">
                    {skeleton({
                      width: 'w-full',
                      height: 'h-4',
                      className: 'mx-auto',
                    })}
                  </div>
                  <div className="mt-2 flex items-center flex-wrap justify-center">
                    {skeleton({
                      width: 'w-full',
                      height: 'h-4',
                      className: 'mx-auto',
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProject = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-8 h-full w-full gap-6">
        <div className="card shadow-lg col-span-2 items-center flex-none">
          <div className="card-body w-full flex-none">
            <div className="px-4">
              <div className="text-left w-full">
                <h2 className="font-semibold text-2xl tracking-wide text-left opacity-80 mb-2">
                  Info
                </h2>
                <div className="grid grid-cols-1">
                  <p className="mt-1 text-base-content text-opacity-60 text-sm">
                    Duration: 2 months
                  </p>
                  <p className="mt-1 text-base-content text-opacity-60 text-sm">
                    Main problem: save time
                  </p>
                  <p className="mt-1 text-base-content text-opacity-60 text-sm">
                    Tech stack: AppsScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow-lg col-span-6 flex items-center flex-col">
          <div className="card-body w-full">
            <div className="px-4">
              <div className="text-center w-full">
                <h2 className="font-semibold text-2xl tracking-wide text-left opacity-80 mb-2">
                  Description
                </h2>
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
                <p className="mt-1 text-base-content text-opacity-60 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Subheader = ({ text, big }) => {
    return (
      <h5 className="card-title">
        {loading ? (
          skeleton({ width: 'w-32', height: 'h-8' })
        ) : (
          <span
            className={`${
              big ? 'text-4xl opacity-90' : 'text-base-content opacity-70'
            } `}
          >
            {text}
          </span>
        )}
      </h5>
    );
  };

  const ListItem = ({ title, items }) => {
    return (
      <div className="text-left w-full col-span-2 md:col-span-1">
        <Subheader text={title} />
        <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4 pr-10">
          {items.map((item, index) => (
            <li className="text-left list-disc pb-3" key={index}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <>
      {isVisible && (
        <div className={`p-4 lg:p-10 h-full`} key={key}>
          <motion.div
            key={key}
            className="col-span-1 lg:col-span-2 "
            initial={{ x: 2000 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                ease: easeOut,
              },
            }}
            exit={{
              x: 2000,
              transition: {
                duration: 0.5,
                ease: easeOut,
              },
            }}
            id={'project-page-' + project.title}
          >
            <div
              className={`card shadow-lg  h-full grid grid-cols-2 gap-6 ${cardBgColor}`}
            >
              <motion.div
                className="col-span-2"
                animate={{
                  opacity: 1,
                  transition: {
                    ease: easeOut,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                    ease: easeOut,
                  },
                }}
              >
                <div className="card p-5 pb-16">
                  <div className="mx-3 flex items-center mb-2">
                    <div className="flex items-center">
                      <BtnNavigate title="Back" destinationUrl={'/'} />
                      <div className="ml-5">
                        <Subheader text={project.title} big={true} />
                      </div>
                    </div>
                  </div>
                  <div className="h-full px-5 w-full lg:w-10/12  mx-auto">
                    <div className="flex items-left flex-col">
                      <div className="w-full px-5 py-3">
                        <div className="pb-5">
                          <Subheader text={'Goal'} />
                          <div>
                            <span>{project.goal}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 pb-5">
                          {project.problems && (
                            <div className="text-left w-full col-span-2 md:col-span-1">
                              <ListItem
                                title="Problems"
                                items={project.problems}
                              />
                            </div>
                          )}
                          {project.solutions && (
                            <div className="text-left w-full col-span-2 md:col-span-1">
                              <ListItem
                                title="Solutions"
                                items={project.solutions}
                              />
                            </div>
                          )}
                          {project.projects && (
                            <div className="text-left w-full col-span-2 md:col-span-2">
                              <ListItem
                                title="Bigger projects"
                                items={project.projects}
                              />
                            </div>
                          )}
                        </div>
                        <div className="col-span-1 mb-5">
                          <Subheader
                            text={
                              <>
                                <span>
                                  Code:{' '}
                                  <a href={project.code}>
                                    {project.code === 'private'
                                      ? 'Private'
                                      : 'Github'}
                                  </a>
                                </span>
                              </>
                            }
                          />
                        </div>
                        <div className="col-span-2">
                          <Subheader text={'Description'} />
                          <div>
                            <span>{project.description}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    index: PropTypes.number,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    stack: PropTypes.array,
    description: PropTypes.string,
  }),
  googleAnalytics: PropTypes.object,
  isVisible: PropTypes.bool,
};
