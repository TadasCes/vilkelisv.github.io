import React from 'react';
import { BtnSkeleton } from '../BtnSkeleton';
import PropTypes from 'prop-types';

export const BtnSimple = ({ title, onClick }) => {
  return (
    <>
      <BtnSkeleton
        title={title}
        style="text-white w-fit bg-blue-500 "
        onClick={onClick}
      />
    </>
  );
};

BtnSimple.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
