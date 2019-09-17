import React from 'react';

import loadingIcon from '../assets/images/loader.gif';

const Loader = () => {
  return (
      <img src={loadingIcon}  height="150px" alt="Loading...." className="image-icon"/>
  )
};

export default Loader;