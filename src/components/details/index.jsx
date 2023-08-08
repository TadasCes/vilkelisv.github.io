import { MdLocationOn } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { RiPhoneFill, RiMailFill } from 'react-icons/ri';
import {} from 'react';
import { FaLinkedin } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import { Card } from '../layout/card';
import { CardContent, CardTitle } from '../layout/card/card-components';
import { BaseIcon } from '../icons/base-icon';

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start px-1 items-center"
    >
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        <BaseIcon size={'small'}>{icon}</BaseIcon> {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        {value}
      </div>
    </a>
  );
};
const Details = ({ loading, data }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {!loading && (
        <Card cardId={'details'}>
          <div className="text-base-content text-opacity-60">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                <CardTitle text={'About me'} loading={loading} />
                <CardContent>
                  <div className="w-full h-full">
                    <div className="pb-5 pr-20">
                      <span>{data.story}</span>
                    </div>
                    {data.location && (
                      <ListItem
                        icon={<MdLocationOn />}
                        title="Based in:"
                        value={data.location}
                      />
                    )}
                    {data.github && (
                      <ListItem
                        icon={<AiFillGithub />}
                        title="GitHub:"
                        value={data.github}
                        link={`https://github.com/${data.github}`}
                      />
                    )}
                    {data.linkedin && (
                      <ListItem
                        icon={<FaLinkedin />}
                        title="LinkedIn:"
                        value={data.linkedin}
                        link={`https://www.linkedin.com/in/${data.linkedin}`}
                      />
                    )}
                  </div>
                </CardContent>
              </>
            )}
          </div>
        </Card>
      )}
    </>
  );
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

Details.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default Details;
