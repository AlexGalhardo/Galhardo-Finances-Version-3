import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return <p className="fw-bold text-danger m-2">{error}</p>;
};

export default Error;
