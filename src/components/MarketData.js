import React, { Component } from 'react';
import { View } from 'react-native';

import styles from '../styles';
import Price from './Price';

export default class MarketData extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.instructions}>
          Bitcoin!
        </Text> */}
        <View style={styles.top} />
        <View style={styles.body}>
          <Price />
        </View>
        <View style={styles.bottom} />
      </View>
    );
  }
}
