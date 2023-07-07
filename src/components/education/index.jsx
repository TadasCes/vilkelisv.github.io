import { skeleton } from '../../helpers/utils';
import {} from 'react';
import PropTypes from 'prop-types';
import { Card } from '../layout/card';
import { useLoadData } from '../../helpers/useLoadData';
import { CardContent, CardTitle } from '../layout/card/card-components';

const ListItem = ({ time, degree, institution }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{time}</div>
    <h3 className="font-semibold">{degree}</h3>
    <div className="mb-4 font-normal">{institution}</div>
  </li>
);

const Education = () => {
  const { loading, data: education } = useLoadData('education');

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          degree={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {education?.length !== 0 && (
        <Card cardId="education">
          <CardTitle text={'Education'} loading={loading} />
          <CardContent>
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
              {loading ? (
                renderSkeleton()
              ) : (
                <>
                  {education.map((item, index) => (
                    <ListItem
                      key={index}
                      time={`${item.from} - ${item.to}`}
                      degree={item.degree}
                      institution={item.institution}
                    />
                  ))}
                </>
              )}
            </ol>
          </CardContent>
        </Card>
      )}
    </>
  );
};

ListItem.propTypes = {
  time: PropTypes.node,
  degree: PropTypes.node,
  institution: PropTypes.node,
};

export default Education;
