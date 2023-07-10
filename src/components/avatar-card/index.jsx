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
        <div className="grid place-items-center grid-cols-2 h-full py-8">
          <div className="avatar opacity-90 col-span-2 md:col-span-1">
            <div className={`mb-8 h-96 w-auto rounded`}>
              {
                <LazyImage
                  src="../src/assets/profile2.jpg"
                  alt={profile.name}
                  placeholder={skeleton({
                    width: 'w-full',
                    height: 'h-full',
                    shape: '',
                  })}
                  style={{
                    width: '75%',
                    margin: '0 auto',
                    borderRadius: '5px',
                  }}
                />
              }
            </div>
          </div>
          <div className="text-left py-10 col-span-2 md:col-span-1 mx-5 md:mx-0">
            <div className={`font-bold text-2xl `}>
              {loading ? (
                skeleton({ width: 'w-48', height: 'h-8' })
              ) : (
                <h1 className={`text-5xl opacity-70 `}>{profile.name}</h1>
              )}
            </div>
            <div className={`text-base-content opacity-60 font-mono mb-8`}>
              {loading ? (
                skeleton({ width: 'w-48', height: 'h-4' })
              ) : (
                <h4 className={``}>{profile.bio}</h4>
              )}
            </div>
            <div
              className={`text-base-content text-opacity-60 font-mono mr-10`}
            >
              {loading ? (
                skeleton({ width: 'w-48', height: 'h-5' })
              ) : (
                <>
                  <p className={`text-sm mb-2`}>
                    ~3 years of combined programming experience.
                  </p>
                  <p className={`text-sm mb-2`}>
                    Interested in everything between automation and
                    illustration.
                  </p>
                  <p className={`text-sm mb-2`}>
                    Self-learner, curious, team-player with the sense of
                    ownership.
                  </p>
                </>
              )}
            </div>
            {/* <Headline text={profile.name} loading={loading} /> */}
            {/* <Subheadline text={profile.bio} loading={loading} /> */}
            {/* <BaseText text={profile.story} loading={loading} /> */}
          </div>
          {/* {resume?.fileUrl &&
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
            ))} */}
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
