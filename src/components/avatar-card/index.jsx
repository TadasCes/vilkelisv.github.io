/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { fallbackImage, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';
import { Card } from '../layout/card';
import { useEffect, useState } from 'react';
import dataConfig from '../../../data.configs';
import { BaseText, Headline, Subheadline } from '../text-components';
import { useLoadData } from '../../helpers/useLoadData';

const AvatarCard = ({ avatarRing, resume }) => {
  const { loading, data: profile } = useLoadData('about');

  return (
    !loading && (
      <Card cardId="avatar">
        <div className="grid place-items-start py-8">
          {/* {loading ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                width: 'w-full',
                height: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div className={`mb-8 w-96 h-96}`}>
              {
                <LazyImage
                  src={
                    'https://lh6.googleusercontent.com/KdmN8dsGPKzbtODwJ6NcTzebGyQeOnfJdehtiaLE_ZuTpe5uW_XmHDJfzJOzSE8a5JRt5Z7visgHwH0'
                  }
                  alt={profile.name}
                  placeholder={skeleton({
                    width: 'w-full',
                    height: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )} */}
          <div className="text-left px-8">
            <Headline text={profile.name} loading={loading} />
            <Subheadline text={profile.bio} loading={loading} />
            <BaseText text={profile.story} loading={loading} />
          </div>
          {resume?.fileUrl &&
            (loading ? (
              <div className="mt-6">
                {skeleton({ width: 'w-40', height: 'h-8' })}
              </div>
            ) : (
              <a
                href={resume.fileUrl}
                target="_blank"
                className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
                download
                rel="noreferrer"
              >
                Download Resume
              </a>
            ))}
        </div>
      </Card>
    )
  );
};

AvatarCard.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  avatarRing: PropTypes.bool.isRequired,
  resume: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
};

export default AvatarCard;
