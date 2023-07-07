import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';
import { Card } from '../layout/card';
import { useLoadData } from '../../helpers/useLoadData';
import { CardContent, CardTitle } from '../layout/card/card-components';

const Skill = () => {
  const { loading, data: skills } = useLoadData('skills');

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
      {skills?.length !== 0 && (
        <Card cardId="skills">
          {/* Add on hover tool tip explaining more about what I know about this topic */}
          <CardTitle text={'Skills'} loading={loading} />
          <CardContent>
            <div className="p-1 flow-root">
              <div className="-m-1 flex flex-wrap justify-center">
                {loading
                  ? renderSkeleton()
                  : skills.map((skill, index) => (
                      <div
                        key={index}
                        className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                      >
                        {skill}
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

export default Skill;
