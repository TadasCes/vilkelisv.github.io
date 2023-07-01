import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnSkeleton } from '../BtnSkeleton';

export const BtnBack = () => {
  const navigate = useNavigate();

  return (
    <>
      <BtnSkeleton
        title="Back"
        onClick={() => navigate(-1)}
        style="text-blue-500 hover:text-white border border-blue-500 bg-transparent hover:bg-blue-500 "
      />
    </>
  );
};
