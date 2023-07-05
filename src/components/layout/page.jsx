/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';

const ForwardedAntdRow = React.forwardRef((props, ref) => (
  <Row ref={ref} {...props} />
));
const MotionRow = motion(ForwardedAntdRow);

const ForwardedAntdCol = React.forwardRef((props, ref) => (
  <Col ref={ref} {...props} />
));
const MotionCol = motion(ForwardedAntdCol);

const transition = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] };

const rowVariant = {
  hidden: { opacity: 0 },
  show: {
    transition: {
      staggerChildren: 0.1,
    },
    opacity: 1,
  },
  close: { opacity: 0 },
};

const colVariant = {
  hidden: { opacity: 0, x: 20, transition },
  show: { opacity: 1, x: 0, transition },
  close: {
    opacity: 0,
    x: -20,
    transition,
  },
};

export const MyCol = ({ title, extra, children, span = 24 }) => {
  return (
    <MotionCol span={span} variants={colVariant}>
      <Card title={title} extra={extra}>
        {children}
      </Card>
    </MotionCol>
  );
};

export const MyRow = ({ children }) => {
  return (
    <MotionRow
      gutter={[24, 24]}
      variants={rowVariant}
      initial="hidden"
      animate="show"
      exit="close"
    >
      {children}
    </MotionRow>
  );
};
