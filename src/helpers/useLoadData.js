import { useEffect, useState } from 'react';
import dataConfig from '../../data.configs';

export const useLoadData = (field) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dataConfig[field]);
    console.log(dataConfig);
    return () => {
      setLoading(false);
    };
  }, []);
  return { loading, data };
};
