import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/Index';

export default class CryptoCalculator extends Component {
  render() {
    return (
      <App platform="ios" />
    );
  }
}

AppRegistry.registerComponent('CryptoCalculator', () => CryptoCalculator);
