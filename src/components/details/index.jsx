import { MdLocationOn } from 'react-icons/md';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { CgDribbble } from 'react-icons/cg';
import { RiPhoneFill, RiMailFill } from 'react-icons/ri';
import {} from 'react';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaSkype,
  FaMastodon,
  FaStackOverflow,
  FaTelegram,
  FaLinkedin,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import { Card } from '../layout/card';
import { useLoadData } from '../../helpers/useLoadData';
import { CardContent, CardTitle } from '../layout/card/card-components';

const isCompanyMention = (company) => {
  return company.startsWith('@') && !company.includes(' ');
};

const companyLink = (company) => {
  return `https://github.com/${company.substring(1)}`;
};

const getFormattedMastodonValue = (mastodonValue, isLink) => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start px-1 items-center"
    >
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        {icon} {title}
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
const Details = () => {
  const { loading, data: details } = useLoadData('details');

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
                  <span>{details.story}</span>
                </div>
                {details.location && (
                  <ListItem
                    icon={<MdLocationOn />}
                    title="Based in:"
                    value={details.location}
                  />
                )}
                <ListItem
                  icon={<AiFillGithub />}
                  title="GitHub:"
                  value={details.github}
                  link={`https://github.com/${details.github}`}
                />
                {details.linkedin && (
                  <ListItem
                    icon={<FaLinkedin />}
                    title="LinkedIn:"
                    value={details.linkedin}
                    link={`https://www.linkedin.com/in/${details.linkedin}`}
                  />
                )}
                {details?.phone && (
                  <ListItem
                    icon={<RiPhoneFill />}
                    title="Phone:"
                    value={details.phone}
                    link={`tel:${details.phone}`}
                  />
                )}
                {details?.email && (
                  <ListItem
                    icon={<RiMailFill />}
                    title="Email:"
                    value={details.email}
                    link={`mailto:${details.email}`}
                  />
                )}
              </div>
            </CardContent>
          </>
        )}
      </div>
    </Card>
  );
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

export default Details;
