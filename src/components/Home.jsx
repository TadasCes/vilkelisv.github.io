import { useEffect, useState } from 'react';
import ErrorPage from './error-page';
import AvatarCard from './avatar-card';
import Details from './details';
import Skill from './skill';
import Experience from './experience';
import Certification from './certification';
import Education from './education';
import { noConfigError } from '../helpers/utils';
import PropTypes from 'prop-types';
import '../assets/index.css';
import { bgColor } from '../assets/style-const';
import AllProjects from './Projects/all-projects';
import dataConfig from '../../data.configs';
import { HelmetProvider } from 'react-helmet-async';
import HeadTagEditor from './head-tag-editor';

let mainContainer;
const Home = ({ config }) => {
  const [error, setError] = useState(
    typeof config === 'undefined' && !config ? noConfigError : null
  );
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(dataConfig);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <HelmetProvider>
        <HeadTagEditor />
        {!loading && (
          <div className="m-auto h-full w-full">
            {error ? (
              <ErrorPage
                status={`${error.status}`}
                title={error.title}
                subTitle={error.subTitle}
              />
            ) : (
              <>
                <div ref={mainContainer} className={`  ${bgColor}`}>
                  <div
                    id="main-page-container"
                    className="grid grid-cols-1 lg:grid-cols-6 gap-6 rounded-box"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-6 col-span-6 gap-6">
                      <div className="grid col-span-6 lg:col-span-4 gap-6 grid-rows-4">
                        <div className="row-span-3">
                          <AvatarCard
                            loading={loading}
                            data={dataConfig.about}
                          />
                        </div>
                        <div className="row-span-1">
                          <Skill loading={loading} data={dataConfig.skills} />
                        </div>
                      </div>
                      <div className="grid col-span-6 lg:col-span-2 gap-6 grid-rows-4">
                        <div className="row-span-2">
                          <Experience
                            loading={loading}
                            data={dataConfig.experiences}
                          />
                        </div>
                        <div className="row-span-1">
                          <Education
                            loading={loading}
                            data={dataConfig.education}
                          />
                        </div>
                        <div className="row-span-1">
                          <Certification
                            loading={loading}
                            data={dataConfig.certifications}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 lg:col-span-6 col-span-6 gap-6">
                      <div className="grid col-span-6 gap-6">
                        <AllProjects loading={loading} data={data.projects} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 col-span-6 gap-6">
                      <div className="grid grid-cols-1 gap-6">
                        <Details loading={loading} data={data.details} />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </HelmetProvider>
    </>
  );
};

Home.propTypes = {
  config: PropTypes.shape({
    about: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      story: PropTypes.string,
    }),
    social: PropTypes.shape({
      linkedin: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
    skills: PropTypes.array,
    externalProjects: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
      })
    ),
    experiences: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string,
        position: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
      })
    ),
    certifications: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string,
        name: PropTypes.string,
        year: PropTypes.string,
        link: PropTypes.string,
      })
    ),
    education: PropTypes.arrayOf(
      PropTypes.shape({
        institution: PropTypes.string,
        degree: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
      })
    ),
  }).isRequired,
};

export { Home, mainContainer };
