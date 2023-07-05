import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ga, skeleton, truncate } from '../../../helpers/utils';
import LazyImage from '../../lazy-image';
import { BtnNavigate } from '../../buttons/btn-navigate/BtnNavigate';
import { AiOutlineArrowDown } from 'react-icons/ai';
import ProjectCard from '../project-card';
import { Card } from '../../layout/card';
import { AnimatePresence, easeOut, motion } from 'framer-motion';
import { routeVariants } from '../../layout/variants';
import { useConfigs } from '../../../helpers/useConfigs';

export const AllProjects = ({
  projects,
  shownCount,
  loading,
  comingFromSubPage,
}) => {
  const {
    pageTopBorderCoords,
    setPageTopBorderCoords,
    allProjectsCardCoords,
    setAllProjectsCardCoords,
  } = useConfigs();

  useEffect(() => {
    setAllProjectsCardCoords({
      y: document.getElementById('all-projects').getBoundingClientRect().top,
    });
    console.log(
      document.getElementById('all-projects').getBoundingClientRect().top
    );
  }, []);

  const [projectCardClicked, setProjectCardClicked] = useState(false);
  let distanceToTop;
  const customAnimation = {
    initial: comingFromSubPage
      ? {
          x: 0,
        }
      : { opacity: 0 },
    animate: {
      x: 0,

      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    exit: {
      // opacity: 0,
      height: '800px',
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: easeOut,
      },
      zIndex: '100',
      y:
        projectCardClicked &&
        40 -
          document.getElementById('all-projects').getBoundingClientRect().top,
    },
  };

  const allProjects = projects;

  return (
    <Card
      cardId="all-projects"
      customAnimation={
        (projectCardClicked && customAnimation) ||
        (comingFromSubPage && customAnimation)
      }
    >
      <div className="mx-3">
        <h5 className="card-title">
          {loading ? (
            skeleton({ width: 'w-32', height: 'h-8' })
          ) : (
            <span className="text-2xl opacity-70">My projects</span>
          )}
        </h5>
      </div>
      <div className="col-span-2 gap-6 ">
        <div className="p-5">
          {allProjects.map((item, index) =>
            index < shownCount ? (
              <ProjectCard
                key={index}
                loading={loading}
                project={item}
                projectCardClicked={setProjectCardClicked}
              />
            ) : (
              ''
            )
          )}
        </div>
      </div>
    </Card>
  );
};

AllProjects.propTypes = {
  projects: PropTypes.array,
  shownCount: PropTypes.number,
  loading: PropTypes.bool,
  comingFromSubPage: PropTypes.any,
};

export default AllProjects;
