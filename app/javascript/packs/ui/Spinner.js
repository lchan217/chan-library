import Loader from "react-loader-spinner";

import React from 'react';

const Spinner = () => {
  return (
    <div>
      <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Spinner;