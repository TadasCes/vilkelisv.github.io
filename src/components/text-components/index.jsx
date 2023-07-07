/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';

export const Headline = ({ text, loading, layoutStyle, textStyle }) => {
  return (
    <div className={`font-bold text-2xl ${layoutStyle}`}>
      {loading ? (
        skeleton({ width: 'w-48', height: 'h-8' })
      ) : (
        <h1 className={`text-4xl opacity-70 ${textStyle}`}>{text}</h1>
      )}
    </div>
  );
};

export const Subheadline = ({ text, loading, layoutStyle, textStyle }) => {
  return (
    <div
      className={`mt-3 text-base-content text-opacity-60 font-mono ${layoutStyle}`}
    >
      {loading ? (
        skeleton({ width: 'w-48', height: 'h-4' })
      ) : (
        <h4 className={`${textStyle}`}>{text}</h4>
      )}
    </div>
  );
};

export const BaseText = ({ text, loading, layoutStyle, textStyle }) => {
  return (
    <div
      className={`mt-3 text-base-content text-opacity-60 font-mono ${layoutStyle}`}
    >
      {loading ? (
        skeleton({ width: 'w-48', height: 'h-5' })
      ) : (
        <h4 className={`${textStyle}`}>{text}</h4>
      )}
    </div>
  );
};

export const TextListItem = ({ year, name, body }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 text-xs">{year}</div>
    <div className="font-semibold">{name}</div>
    <h3 className="mb-4 font-normal">{body}</h3>
  </li>
);

TextListItem.propTypes = {
  year: PropTypes.node,
  name: PropTypes.node,
  body: PropTypes.node,
  link: PropTypes.string,
};
