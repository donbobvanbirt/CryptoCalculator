import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import styles from './styles';

import MarketData from './components/MarketData';

export default class App extends Component {
  render() {

    return (
        <MarketData />
    );
  }
}
