import React, { useEffect, useState } from 'react';

export const useConfigs = () => {
  const [allProjectsCardCoords, setAllProjectsCardCoords] = useState({});
  const [pageTopBorderCoords, setPageTopBorderCoords] = useState(0);
  return {
    pageTopBorderCoords,
    setPageTopBorderCoords,
    allProjectsCardCoords,
    setAllProjectsCardCoords,
  };
};

export const useExportConfigs = () => {
  const { pageTopBorderCoords, allProjectsCardCoords } = useConfigs();
  return {
    pageTopBorderCoords,
    allProjectsCardCoords,
  };
};
