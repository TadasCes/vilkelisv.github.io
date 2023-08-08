import React from 'react';
import PropTypes from 'prop-types';

const sizes = {
  small: '18px',
  medium: '24px',
  big: '32px',
  huge: '48px',
};

export const BaseIcon = ({ children, size }) => {
  return (
    <div className="text-accent">
      <i style={{ fontSize: sizes[size] }}>{children}</i>
    </div>
  );
};

BaseIcon.defaultProps = {
  size: sizes['medium'],
};

BaseIcon.propTypes = {
  children: PropTypes.object,
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired,
};
