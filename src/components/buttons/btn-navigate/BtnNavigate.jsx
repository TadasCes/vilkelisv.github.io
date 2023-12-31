import React from 'react';
import { BtnSkeleton } from '../BtnSkeleton';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BtnNavigate = ({ title, destinationUrl }) => {
  const navigate = useNavigate();

  return (
    <>
      <Link to={destinationUrl}>
        <BtnSkeleton title={title} style="text-white w-fit bg-blue-500 " />
      </Link>
    </>
  );
};

BtnNavigate.propTypes = {
  title: PropTypes.string,
  destinationUrl: PropTypes.string,
};
