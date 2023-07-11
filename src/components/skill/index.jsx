import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';
import { Card } from '../layout/card';
import { CardContent, CardTitle } from '../layout/card/card-components';
import { Tooltip } from 'react-tooltip';

const Skill = ({ loading, data }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
        </div>
      );
    }

    return array;
  };

  return (
    <>
      {!loading && data?.length !== 0 && (
        <Card cardId="skills">
          <CardTitle text={'Skills'} loading={loading} />
          <CardContent layoutStyle={'flex items-center mx-auto h-full w-10/12'}>
            <div className="p-1 flow-root h-fit">
              <div className="m-1 flex flex-wrap justify-center ">
                {loading
                  ? renderSkeleton()
                  : data.map((skill, index) => (
                      <div
                        data-tooltip-id={skill.name}
                        data-tooltip-content={skill.used}
                        key={index}
                        className={`m-1 text-xs inline-flex items-center font-bold leading-sm px-4 py-2 rounded-full bg-slate-400 bg-opacity-50`}
                      >
                        {skill.name}
                        <Tooltip id={skill.name} />
                      </div>
                    ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

Skill.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default Skill;
