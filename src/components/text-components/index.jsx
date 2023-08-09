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

const ListItem = ({ loading, title, items }) => {
  return (
    <div className="text-left w-full col-span-2 md:col-span-1">
      <h5 className="card-title">
        {loading ? (
          skeleton({ width: 'w-32', height: 'h-8' })
        ) : (
          <span className={`${'text-base-content opacity-70'} `}>{title}</span>
        )}
      </h5>
      <ol className="relative border-l colored-list border-base-300 border-opacity-30 my-2 mx-8">
        {items.map((item, index) => (
          <li className="text-left list-disc pb-3" key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

TextListItem.propTypes = {
  year: PropTypes.node,
  name: PropTypes.node,
  body: PropTypes.node,
  link: PropTypes.string,
};
