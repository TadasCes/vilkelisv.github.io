import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { cardBgColor, loadingBgColor } from '../../../assets/style-const';
import { easeOut, motion } from 'framer-motion';

export const Card = ({ children, loading, cardId, customAnimation }) => {
  const ref = useRef(null);

  const [configLoading, setConfigLoading] = useState(true);
  const [isAboveSplit, setIsAboveSplit] = useState(false);
  const [motionConfig, setMotionConfig] = useState({
    initial: { x: window.innerWidth },
  });

  const transition = {
    duration: 0.5,
    delay: Math.random() * (0.3 - 0.1) + 0.1,
    ease: easeOut,
  };

  useEffect(() => {
    if (!customAnimation) {
      if (cardId) {
        let elem = document.getElementById(cardId);
        let elemXPosition = elem.getBoundingClientRect().x;
        const windowWidth = window.innerWidth;
        const windowCenter = windowWidth / 2;
        const aboveSplit = elemXPosition > windowCenter;
        setIsAboveSplit(aboveSplit);
        setMotionConfig({
          initial: aboveSplit
            ? { x: window.innerWidth, opacity: 0 }
            : { x: -window.innerWidth, opacity: 0 },
          animate: {
            x: 0,
            opacity: 1,
            transition: transition,
          },
          exit: aboveSplit
            ? {
                x: window.innerWidth,
                transition: transition,
                opacity: 0,
              }
            : {
                x: -window.innerWidth,
                transition: transition,
                opacity: 0,
              },
        });
        setConfigLoading(false);
      }
    }
  }, []);

  return (
    <div id={cardId} className="h-full">
      {!configLoading && (
        <motion.div
          className={`card shadow-lg compact h-full  ${
            loading ? loadingBgColor : cardBgColor
          } `}
          style={{ overflow: 'hidden' }}
          initial={
            customAnimation ? customAnimation.initial : motionConfig.initial
          }
          animate={
            customAnimation ? customAnimation.animate : motionConfig.animate
          }
          exit={customAnimation ? customAnimation.exit : motionConfig.exit}
          key={cardId}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  loading: PropTypes.bool,
  cardId: PropTypes.string,
  customAnimation: PropTypes.any,
};
