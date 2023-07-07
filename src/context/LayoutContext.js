import { createContext } from 'react';

export const LayoutContext = createContext({
  layoutLoading: true,
  topDistance: 10,
  allProjectsCardDistance: 0,
});
