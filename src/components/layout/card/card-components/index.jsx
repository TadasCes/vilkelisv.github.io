import { skeleton } from '../../../../helpers/utils';

/* eslint-disable react/prop-types */
export const CardTitle = ({ text, loading, big, layoutStyle, textStyle }) => {
  return (
    <div className="mx-3 pt-3">
      <h5 className="card-title">
        {loading ? (
          skeleton({ width: 'w-32', height: 'h-8' })
        ) : (
          <span
            className={`${big ? 'text-3xl' : 'text-base-content'} opacity-70`}
          >
            {text}
          </span>
        )}
      </h5>
    </div>
  );
};

export const CardContent = ({ children, loading, layoutStyle }) => {
  return (
    <div
      className={`h-full flex items-center text-base-content text-opacity-60 p-2 mx-2 my-2 ${layoutStyle}`}
    >
      {children}
    </div>
  );
};
