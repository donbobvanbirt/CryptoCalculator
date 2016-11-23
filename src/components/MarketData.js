import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';

import styles from '../styles';

export default class MarketData extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.instructions}>
          Bitcoin!
        </Text> */}
        <View style={styles.top} />
        <View style={styles.body} />
        <View style={styles.bottom} />
      </View>
    );
  }
}
