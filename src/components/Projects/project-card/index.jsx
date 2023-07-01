import React from 'react';
import LazyImage from '../../lazy-image';
import { ga, skeleton, truncate } from '../../../helpers/utils';
import { AiOutlineArrowDown } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { cardBgColor } from '../../../assets/style-const';

export const ProjectCard = ({ project, loading, googleAnalytics }) => {
  return (
    <a
      className={`card shadow-lg compact cursor-pointer mb-5 ${cardBgColor}`}
      key={project.title}
      href={project.link}
      onClick={(e) => {
        e.preventDefault();

        try {
          if (googleAnalytics?.id) {
            ga.event({
              action: `Click project: ${project.title}`,
              params: {
                post: project.title,
              },
            });
          }
        } catch (error) {
          console.error(error);
        }

        window?.open(project.link, '_blank');
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
    </a>
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
};

export default ProjectCard;
