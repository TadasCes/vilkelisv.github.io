import React from 'react';
import PropTypes from 'prop-types';
import { cardBgColor, loadingBgColor } from '../../../assets/style-const';

export const Card = ({ children, loading }) => {
  return (
    <div
      className={`card shadow-lg compact transition ease-in-out ${
        loading ? loadingBgColor : cardBgColor
      } `}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};
