import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  hoverAnimation,
  hoverAnimationIcon,
} from '../../../assets/style-const';
import { BaseIcon } from '../../icons/base-icon';

export const BtnIcon = ({ onClick, children, style, size }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={onClick}
        className={`color-accent ${hoverAnimationIcon} ` + style}
      >
        <BaseIcon size={size}>{children}</BaseIcon>
      </button>
    </>
  );
};

BtnIcon.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
  style: PropTypes.string,
  size: PropTypes.string,
};
