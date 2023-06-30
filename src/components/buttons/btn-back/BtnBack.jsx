import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BtnBack = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Back
      </button>
    </>
  );
};
