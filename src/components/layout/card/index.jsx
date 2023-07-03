import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { cardBgColor, loadingBgColor } from '../../../assets/style-const';
import { easeInOut, easeOut, motion } from 'framer-motion';

export const Card = ({ children, loading, cardId }) => {
  const scrollRef = useRef(null);
  const [configLoading, setConfigLoading] = useState(true);
  const [isAboveSplit, setIsAboveSplit] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [motionConfig, setMotionConfig] = useState({
    initial: {},
  });

  useEffect(() => {
    if (cardId) {
      let elem = document.getElementById(cardId);
      let elemXPosition = elem.getBoundingClientRect().x;
      const windowWidth = window.innerWidth;
      const windowCenter = windowWidth / 2;

      const aboveSplit = elemXPosition > windowCenter;
      setIsAboveSplit(aboveSplit);
      setMotionConfig({
        initial: aboveSplit
          ? { x: window.innerWidth }
          : { x: -window.innerWidth },
      });
      // TODO: this shouldn't be here
      setTimeout(() => {
        setConfigLoading(false);
      }, 1000);
    }
  }, []);

  // const RenderCard = () => {
  //   return (
  //     <motion.div
  //       id={cardId}
  //       className={`card shadow-lg compact transition ease-in-out ${
  //         loading ? loadingBgColor : cardBgColor
  //       } `}
  //       style={{ overflow: 'hidden' }}
  //       initial={motionConfig.initial}
  //       animate={motionConfig.animate}
  //       transition={{ duration: 0.5, delay: 2 }}
  //       exit={{ x: 0 }}
  //       key={'container'}
  //     >
  //       <button onClick={() => console.log(isAboveSplit)}>Call</button>

  //       <div className="card-body">{children}</div>
  //     </motion.div>
  //   );
  // };
  // function FadeInWhenVisible({ children }) {
  //   return (
  //     <motion.div
  //       initial="hidden"
  //       whileInView="visible"
  //       viewport={{ once: true }}
  //       transition={{ duration: 0.3 }}
  //       variants={{
  //         visible: { opacity: 1, scale: 1 },
  //         hidden: { opacity: 0, scale: 0 }
  //       }}
  //     >
  //       {children}
  //     </motion.div>
  //   );
  // }

  return (
    <motion.div
      id={cardId}
      ref={scrollRef}
      whileInView={() => {
        console.log(scrollRef);
        setIsInView(true);
        return {};
      }}
    >
      {!configLoading && (
        <motion.div
          className={`card shadow-lg compact h-full  ${
            loading ? loadingBgColor : cardBgColor
          } `}
          style={{ overflow: 'hidden' }}
          viewport={{ root: scrollRef, amount: 'some' }}
          initial={motionConfig.initial}
          animate={
            (console.log(isInView + ' ' + cardId),
            isInView && {
              x: 0,
              transition: {
                duration: 0.5,
                delay: Math.random() * (0.8 - 0.2) + 0.2,
                ease: easeOut,
              },
            })
          }
          exit={{ x: 0 }}
          key={cardId}
        >
          <button onClick={() => console.log(isAboveSplit)}>Call</button>
          <div className="card-body">{children}</div>
        </motion.div>
      )}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  loading: PropTypes.bool,
  cardId: PropTypes.string,
};
