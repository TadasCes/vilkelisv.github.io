import React from 'react';
import { BtnSkeleton } from '../BtnSkeleton';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BtnNavigate = ({ title, destinationUrl }) => {
  return (
    <>
      <BtnSkeleton
        title={title}
        onClick={() => <Navigate to={destinationUrl} />}
        style="text-white w-fit hover:text-blue-500 bg-blue-500 hover:bg-transparent hover:border-blue-500"
      />
    </>
  );
};

BtnNavigate.propTypes = {
  title: PropTypes.string,
  destinationUrl: PropTypes.string,
};
