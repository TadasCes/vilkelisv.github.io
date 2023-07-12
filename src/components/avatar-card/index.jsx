import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';
import { Card } from '../layout/card';

const AvatarCard = ({ loading, data }) => {
  return (
    !loading && (
      <Card cardId="avatar">
        <div className="grid place-items-center grid-cols-2 h-full py-8">
          <div className="avatar opacity-90 col-span-2 md:col-span-1">
            <div className={`mb-8 h-96 w-auto rounded`}>
              {
                <LazyImage
                  src="src/assets/profile2.jpg"
                  alt={data.name}
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
                <h1 className={`text-5xl opacity-70 `}>{data.name}</h1>
              )}
            </div>
            <div className={`text-base-content opacity-60 font-mono mb-8`}>
              {loading ? (
                skeleton({ width: 'w-48', height: 'h-4' })
              ) : (
                <h4 className={``}>{data.bio}</h4>
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
          </div>
        </div>
      </Card>
    )
  );
};

AvatarCard.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default AvatarCard;
