import {} from 'react';
import PropTypes from 'prop-types';
import { ga, skeleton, truncate } from '../../../helpers/utils';
import LazyImage from '../../lazy-image';
import { BtnNavigate } from '../../buttons/btn-navigate/BtnNavigate';
import { AiOutlineArrowDown } from 'react-icons/ai';
import ProjectCard from '../project-card';
import { Card } from '../../layout/card';

export const AllProjects = ({ projects, shownCount, loading }) => {
  const allProjects = projects;
  return (
    <Card>
      <>
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
                <ProjectCard key={index} loading={loading} project={item} />
              ) : (
                ''
              )
            )}
          </div>
        </div>
      </>
    </Card>
  );
};

AllProjects.propTypes = {
  projects: PropTypes.array,
  shownCount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AllProjects;
