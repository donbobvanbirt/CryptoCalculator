import React, { Component } from 'react';

import MarketData from './MarketData';
import Calculator from './Calculator';

const NavContainer = (props) => {
  const { index, onForward, onBack } = props;
  // let currentComponent = 'Error';
  let currentComponent = (
      <MarketData onForward={onForward} />
    );
  // if (index === 0) {
  //   currentComponent = (
  //     <MarketData onForward={onForward} />
  //   );
  // } else if (index === 1) {
  //   currentComponent = (
  //     <Calculator onBack={onBack} />
  //   );
  // }
  return (
    currentComponent
  );
};

export default NavContainer;
