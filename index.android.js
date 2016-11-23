import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/Index';

export default class cryptotrace extends Component {
  render() {
    return (
      <App platform='android' />
    )
  }
}

AppRegistry.registerComponent('cryptotrace', () => cryptotrace);
