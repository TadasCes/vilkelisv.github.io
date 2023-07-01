import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  genericError,
  getInitialTheme,
  noConfigError,
  notFoundError,
  sanitizeConfig,
  setupHotjar,
  skeleton,
  tooManyRequestError,
} from '../../../helpers/utils';
import { formatDistance } from 'date-fns';
import Experience from '../../experience';
import Education from '../../education';
import Certification from '../../certification';
import { bgColor } from '../../../assets/style-const';
import { BtnBack } from '../../buttons/btn-back/BtnBack';
import LazyImage from '../../lazy-image';

export const Project = () => {
  const project = {
    index: '1',
    imageUrl: 'https://picsum.photos/200/300',
    title: 'This is a test project',
    stack: ['AppsScript, JavaScript'],
    description: `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). 
    `,
  };
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

  return (
    <>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card p-5">
              <div className="mx-3 flex items-center mb-2">
                <div className="grid grid-cols-4 gap-6 mb-5">
                  <div className="col-span-1">
                    <BtnBack />
                  </div>
                  <div className="col-span-3">
                    <h5 className="text-center card-title">
                      {loading ? (
                        skeleton({ width: 'w-40', height: 'h-8' })
                      ) : (
                        <span className="text-4xl opacity-90">
                          My Project title
                        </span>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {loading ? renderSkeleton() : renderProject()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
};
