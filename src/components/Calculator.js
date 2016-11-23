import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

import styles from '../styles';
import Price from './Price';

export default class MarketData extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculatorTop}>
          <TouchableHighlight onPress={this.props.onBack}>
            <Text style={styles.viewSelect}>Back</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.body}>
          <Text>Calculator</Text>
        </View>
        <View style={styles.bottom} />
      </View>
    );
  }
}
