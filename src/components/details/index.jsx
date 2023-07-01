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
const Details = ({ about, profile, loading, social, github }) => {
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
    <Card>
      <div className="text-base-content text-opacity-60">
        {loading || !profile ? (
          renderSkeleton()
        ) : (
          <>
            <div className="text-base-content opacity-70">
              <span className="text-2xl font-semibold">About me</span>
            </div>
            <div>
              <span>{about.who}</span>
              <br />
              <span>{about.story}</span>
            </div>
            {profile.location && (
              <ListItem
                icon={<MdLocationOn />}
                title="Based in:"
                value={profile.location}
              />
            )}
            {profile.company && (
              <ListItem
                icon={<FaBuilding />}
                title="Company:"
                value={profile.company}
                link={
                  isCompanyMention(profile.company.trim())
                    ? companyLink(profile.company.trim())
                    : null
                }
              />
            )}
            <ListItem
              icon={<AiFillGithub />}
              title="GitHub:"
              value={github.username}
              link={`https://github.com/${github.username}`}
            />
            {social?.linkedin && (
              <ListItem
                icon={<FaLinkedin />}
                title="LinkedIn:"
                value={social.linkedin}
                link={`https://www.linkedin.com/in/${social.linkedin}`}
              />
            )}
            {social?.phone && (
              <ListItem
                icon={<RiPhoneFill />}
                title="Phone:"
                value={social.phone}
                link={`tel:${social.phone}`}
              />
            )}
            {social?.email && (
              <ListItem
                icon={<RiMailFill />}
                title="Email:"
                value={social.email}
                link={`mailto:${social.email}`}
              />
            )}
          </>
        )}
      </div>
    </Card>
  );
};

Details.propTypes = {
  about: PropTypes.object,
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  social: PropTypes.object.isRequired,
  github: PropTypes.object.isRequired,
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

export default Details;
