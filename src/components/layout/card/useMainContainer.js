import React, { useRef } from 'react';

export const useMainContainer = () => {
  const mainContainer = useRef(null);
  return { mainContainer };
};
