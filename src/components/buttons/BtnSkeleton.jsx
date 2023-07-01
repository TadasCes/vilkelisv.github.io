import React from 'react';
import PropTypes from 'prop-types';

export const BtnSkeleton = ({ title, onClick, style }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={
          'rounded py-2 px-4 font-semibold transition ease-in-out border ' +
          style
        }
      >
        {title}
      </button>
    </>
  );
};

BtnSkeleton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.string,
};
