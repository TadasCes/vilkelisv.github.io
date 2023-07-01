import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ga, skeleton, truncate } from '../../../helpers/utils';
import LazyImage from '../../lazy-image';
import { BtnNavigate } from '../../buttons/btn-navigate/BtnNavigate';
import { AiOutlineArrowDown } from 'react-icons/ai';

const displaySection = (externalProjects) => {
  if (
    externalProjects &&
    Array.isArray(externalProjects) &&
    externalProjects.length
  ) {
    return true;
  } else {
    return false;
  }
};

const ProjectCard = ({ externalProjects, loading, googleAnalytics }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
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
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click External Project',
                params: {
                  post: item.title,
                },
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, '_blank');
        }}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-left flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-left w-full ">
                  <div className="grid grid-cols-10 ">
                    <div className="w-fit col-span-1">
                      {item.imageUrl && (
                        <div className="avatar opacity-90">
                          <div className="w-20 h-20 mask mask-squircle">
                            <LazyImage
                              src={item.imageUrl}
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
                        <h2 className="font-semibold text-lg tracking-wide text-left opacity-60 mb-2">
                          {item.title}
                        </h2>
                      </div>
                      <div className="block w-full">
                        <p className="mt-1 text-base-content text-opacity-60 text-sm">
                          {truncate(item.description, 100, true)}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-self-center self-center">
                      <button className="rounded-full p-3 font-semibold transition ease-in-out drop-shadow-md bg-blue-500 hover:bg-blue-600 hover:drop-shadow-lg hover:scale-110">
                        <AiOutlineArrowDown
                          size="20px"
                          className="text-white"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      {displaySection(externalProjects) && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact bg-base-100 shadow bg-opacity-40">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          My Projects
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid col-span-2 gap-6 ">
                      {loading ? renderSkeleton() : renderExternalProjects()}
                    </div>
                  </div>
                </div>
                <BtnNavigate title="All projects" destinationUrl="/projects" />
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

ProjectCard.propTypes = {
  externalProjects: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
};

export default ProjectCard;
