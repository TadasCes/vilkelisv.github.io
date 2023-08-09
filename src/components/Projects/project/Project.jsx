import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { skeleton, truncate } from '../../../helpers/utils';
import { cardBgColor, hoverAnimation } from '../../../assets/style-const';
import { BtnBack } from '../../buttons/btn-back/BtnBack';
import LazyImage from '../../lazy-image';
import { motion, easeOut, usePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { LayoutContext } from '../../../context/LayoutContext';
import { BtnNavigate } from '../../buttons/btn-navigate/BtnNavigate';
import { CardContent, CardTitle } from '../../layout/card/card-components';
import { Card } from '../../layout/card';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { BtnIcon } from '../../buttons/btn-icon';

export const Project = () => {
  const layoutContext = useContext(LayoutContext);
  const { location, state, key, pathname } = useLocation();
  console.log(state);
  const project = state.project;
  const isVisible = state.isVisible;
  const [loading, setLoading] = useState(false);
  const [isPresent, safeToRemove] = usePresence();
  const navigate = useNavigate();

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
        <ol className="relative border-l colored-list border-base-300 border-opacity-30 my-2 mx-8">
          {items.map((item, index) => (
            <li className="text-left list-disc pb-3" key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <>
      {isVisible && (
        <div className={`h-full`} key={key}>
          <>
            <div className={`h-full`}>
              <div
                id="main-page-container"
                className="grid grid-cols-1 lg:grid-cols-6 col-span-6 rounded-box gap-3 lg:gap-6"
              >
                <div className="col-span-6 lg:col-span-6 row-span-1">
                  <Card cardId="project-page-title" style="py-10">
                    <CardContent>
                      <BtnIcon onClick={() => navigate(-1)} size={'huge'}>
                        <MdOutlineKeyboardArrowLeft />
                      </BtnIcon>
                      <CardTitle
                        text={project.title}
                        loading={false}
                        big={true}
                        center={true}
                        layoutStyle={'pr-12'}
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="col-span-6 lg:col-span-3 row-span-1">
                  <Card cardId="project-page-goals">
                    <CardTitle text={'Goals'} loading={false} big={false} />
                    <CardContent>
                      <div className="mx-8">
                        <span>{project.goal}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {project.code && (
                  <div className="col-span-6 lg:col-span-3 row-span-1">
                    <Card cardId="project-page-code">
                      <CardTitle text={'Code'} loading={false} big={false} />
                      <CardContent layoutStyle={'h-full'}>
                        <ListItem
                          items={[
                            <li
                              key="status"
                              className="text-left list-disc pb-3"
                            >
                              <span>Status: {project.status}</span>
                            </li>,
                            <li key="code" className="text-left list-disc pb-3">
                              <span>
                                Code:{' '}
                                {project.code === 'private' ? (
                                  'Private'
                                ) : (
                                  <a href={project.code}>Github</a>
                                )}
                              </span>
                            </li>,
                          ]}
                        />
                      </CardContent>
                    </Card>
                  </div>
                )}
                {project.problems && (
                  <div className="col-span-6 lg:col-span-3 row-span-2">
                    <Card cardId="project-page-problems">
                      <CardTitle
                        text={'Problems'}
                        loading={false}
                        big={false}
                      />
                      <CardContent>
                        <ListItem items={project.problems} />
                      </CardContent>
                    </Card>
                  </div>
                )}
                {project.solutions && (
                  <div className="col-span-6 lg:col-span-3 row-span-2">
                    <Card cardId="project-page-solutions">
                      <CardTitle
                        text={'Solutions'}
                        loading={false}
                        big={false}
                      />
                      <CardContent>
                        <ListItem items={project.solutions} />
                      </CardContent>
                    </Card>
                  </div>
                )}
                <div className="col-span-6 lg:col-span-6 row-span-1">
                  <Card cardId="project-page-desc" style="py-10">
                    <CardTitle
                      text={'Description'}
                      loading={false}
                      big={true}
                      center={true}
                    />
                    <CardContent layoutStyle={'mx-32'}>
                      <span>{project.description}</span>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </>
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
  title: PropTypes.string,
  text: PropTypes.string,
  big: PropTypes.bool,
  items: PropTypes.array,
};
