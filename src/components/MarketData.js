import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

import styles from '../styles';
import Price from './Price';
import BottomLinks from './BottomLinks';

export default class MarketData extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableHighlight onPress={this.props.onForward}>
            <Text style={styles.viewSelect}>Calculator</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.body}>
          <Price />
        </View>
        <View style={styles.bottom}>
          <BottomLinks />
        </View>
      </View>
    );
  }
}
