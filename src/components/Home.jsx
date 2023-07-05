import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import HeadTagEditor from './head-tag-editor';
import ErrorPage from './error-page';
import ThemeChanger from './theme-changer';
import AvatarCard from './avatar-card';
import Details from './details';
import Skill from './skill';
import Experience from './experience';
import Certification from './certification';
import Education from './education';
import GithubProject from './github-project';
import Blog from './blog';
import Footer from './footer';
import {
  genericError,
  getInitialTheme,
  noConfigError,
  notFoundError,
  setupHotjar,
  tooManyRequestError,
  sanitizeConfig,
} from '../helpers/utils';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
import '../assets/index.css';
import { formatDistance } from 'date-fns';
import { bgColor } from '../assets/style-const';
import { BtnNavigate } from './buttons/btn-navigate/BtnNavigate';
import { Menu } from './menu/Menu';
import AllProjects from './Projects/all-projects';
import { AnimatePresence, motion } from 'framer-motion';
import { useMainContainer } from './layout/card/useMainContainer';
import { routeVariants } from './layout/variants';
import {
  Link,
  unstable_HistoryRouter,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useConfigs } from '../helpers/useConfigs';

let mainContainer;
const Home = ({ config }) => {
  const {
    pageTopBorderCoords,
    setPageTopBorderCoords,
    allProjectsCardCoords,
    setAllProjectsCardCoords,
  } = useConfigs();
  const location = useLocation();
  const [previousPage, setPreviousPage] = useState('');
  const [comingFromProjects, setComingFromProjects] = useState({});

  // useEffect(() => {
  //   setAllProjectsCardCoords({
  //     y: document.getElementById('all-projects').getBoundingClientRect().top,
  //   });
  // }, [location]);

  useEffect(() => {
    setPageTopBorderCoords(
      document.getElementById('main-page-container').getBoundingClientRect().top
    );
  }, [location]);

  useEffect(() => {
    if (location.state.comingFromSub) setComingFromProjects(location.state);
  }, [location]);

  mainContainer = useRef(null);
  const [error, setError] = useState(
    typeof config === 'undefined' && !config ? noConfigError : null
  );
  const [sanitizedConfig] = useState(
    typeof config === 'undefined' && !config ? null : sanitizeConfig(config)
  );
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    if (sanitizedConfig) {
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
      // loadData();
    }
  }, [sanitizedConfig]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // const loadData = useCallback(() => {
  //   axios
  //     .get(`https://api.github.com/users/${sanitizedConfig.github.username}`)
  //     .then((response) => {
  //       let data = response.data;

  //       let profileData = {
  //         avatar: data.avatar_url,
  //         name: data.name ? data.name : '',
  //         bio: data.bio ? data.bio : '',
  //         location: data.location ? data.location : '',
  //         company: data.company ? data.company : '',
  //       };

  //       setProfile(profileData);
  //       return data;
  //     })
  //     .then((userData) => {
  //       let excludeRepo = ``;
  //       if (userData.public_repos === 0) {
  //         setRepo([]);
  //         return;
  //       }

  //       sanitizedConfig.github.exclude.projects.forEach((project) => {
  //         excludeRepo += `+-repo:${sanitizedConfig.github.username}/${project}`;
  //       });

  //       let query = `user:${
  //         sanitizedConfig.github.username
  //       }+fork:${!sanitizedConfig.github.exclude.forks}${excludeRepo}`;

  //       let url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.github.sortBy}&per_page=${sanitizedConfig.github.limit}&type=Repositories`;

  //       axios
  //         .get(url, {
  //           headers: {
  //             'Content-Type': 'application/vnd.github.v3+json',
  //           },
  //         })
  //         .then((response) => {
  //           let data = response.data;

  //           setRepo(data.items);
  //         })
  //         .catch((error) => {
  //           handleError(error);
  //         });
  //     })
  //     .catch((error) => {
  //       handleError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [setLoading]);

  const handleError = (error) => {
    console.error('Error:', error);
    try {
      let reset = formatDistance(
        new Date(error.response.headers['x-ratelimit-reset'] * 1000),
        new Date(),
        {
          addSuffix: true,
        }
      );

      if (error.response.status === 403) {
        // setError(tooManyRequestError(reset));
      } else if (error.response.status === 404) {
        setError(notFoundError);
      } else {
        setError(genericError);
      }
    } catch (error2) {
      setError(genericError);
    }
  };

  return (
    <HelmetProvider>
      {sanitizedConfig && (
        <HeadTagEditor
          profile={profile}
          theme={theme}
          googleAnalytics={sanitizedConfig.googleAnalytics}
          social={sanitizedConfig.social}
        />
      )}
      {/* <div className="m-auto fade-in h-screen w-3/4"> */}
      <motion.div className="m-auto h-screen w-4/4" key={'test'}>
        {error ? (
          <ErrorPage
            status={`${error.status}`}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          sanitizedConfig && (
            <>
              {/* <Menu /> */}
              <div ref={mainContainer} className={`p-4 lg:p-10 min-h-full`}>
                <Link to={'/foo'}>To foo </Link>
                <div
                  id="main-page-container"
                  className="grid grid-cols-1 lg:grid-cols-6 gap-6 rounded-box"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-6 col-span-6 gap-6">
                    <div className="grid col-span-6 lg:col-span-4 gap-6">
                      <AvatarCard
                        profile={profile}
                        loading={loading}
                        avatarRing={!sanitizedConfig.themeConfig.hideAvatarRing}
                        resume={sanitizedConfig.resume}
                      />
                    </div>
                    <div className="grid col-span-6 lg:col-span-2 gap-6">
                      <Experience
                        loading={loading}
                        experiences={sanitizedConfig.experiences}
                      />
                      <Education
                        loading={loading}
                        education={sanitizedConfig.education}
                      />
                      {/* <Certification
                        loading={loading}
                        certifications={sanitizedConfig.certifications}
                      /> */}
                    </div>
                  </div>
                  <div className="grid grid-cols-6 lg:col-span-6 col-span-6 gap-6">
                    <div className="grid col-span-6 gap-6">
                      <AllProjects
                        loading={loading}
                        projects={sanitizedConfig.externalProjects}
                        shownCount={3}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                        comingFromSubPage={comingFromProjects}
                      />
                    </div>
                    {/* <div className="grid grid-cols-1 lg:grid-cols-1 col-span-2 gap-6">
                      <GithubProject
                        repo={repo}
                        loading={loading}
                        github={sanitizedConfig.github}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      />
                    </div> */}
                  </div>
                  {/* <div className="grid col-span-2 gap-6">
                    <div className="grid gap-6">
                      <Skill
                        loading={loading}
                        skills={sanitizedConfig.skills}
                      />
                    </div>
                    <Blog
                      loading={loading}
                      googleAnalytics={sanitizedConfig.googleAnalytics}
                      blog={sanitizedConfig.blog}
                    />
                  </div>
                  <div className="grid grid-cols-1 col-span-4 gap-6">
                    <div className="grid grid-cols-1 gap-6">
                      <Details
                        about={sanitizedConfig.about}
                        profile={profile}
                        loading={loading}
                        github={sanitizedConfig.github}
                        social={sanitizedConfig.social}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <footer
                className={`p-4 footer ${bgColor} text-base-content footer-center`}
              >
                <div className="card compact bg-base-100 shadow">
                  <Footer content={sanitizedConfig.footer} loading={loading} />
                </div>
              </footer>
            </>
          )
        )}
      </motion.div>
    </HelmetProvider>
  );
};

Home.propTypes = {
  config: PropTypes.shape({
    github: PropTypes.shape({
      username: PropTypes.string.isRequired,
      sortBy: PropTypes.oneOf(['stars', 'updated']),
      limit: PropTypes.number,
      exclude: PropTypes.shape({
        forks: PropTypes.bool,
        projects: PropTypes.array,
      }),
    }).isRequired,
    social: PropTypes.shape({
      linkedin: PropTypes.string,
      twitter: PropTypes.string,
      mastodon: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      dribbble: PropTypes.string,
      behance: PropTypes.string,
      medium: PropTypes.string,
      dev: PropTypes.string,
      stackoverflow: PropTypes.string,
      website: PropTypes.string,
      skype: PropTypes.string,
      telegram: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
    resume: PropTypes.shape({
      fileUrl: PropTypes.string,
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
    blog: PropTypes.shape({
      source: PropTypes.string,
      username: PropTypes.string,
      limit: PropTypes.number,
    }),
    googleAnalytics: PropTypes.shape({
      id: PropTypes.string,
    }),
    hotjar: PropTypes.shape({
      id: PropTypes.string,
      snippetVersion: PropTypes.number,
    }),
    themeConfig: PropTypes.shape({
      defaultTheme: PropTypes.string,
      disableSwitch: PropTypes.bool,
      respectPrefersColorScheme: PropTypes.bool,
      hideAvatarRing: PropTypes.bool,
      themes: PropTypes.array,
      customTheme: PropTypes.shape({
        primary: PropTypes.string,
        secondary: PropTypes.string,
        accent: PropTypes.string,
        neutral: PropTypes.string,
        'base-100': PropTypes.string,
        '--rounded-box': PropTypes.string,
        '--rounded-btn': PropTypes.string,
      }),
    }),
    footer: PropTypes.string,
  }).isRequired,
};

export { Home, mainContainer };
