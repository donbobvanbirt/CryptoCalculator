import React, { Component } from 'react';
import { TouchableHighlight, Text, Linking } from 'react-native';

import styles from '../styles';

export default class BottomLinks extends Component {
  handleClick() {
    Linking.canOpenURL('https://www.coinbase.com/join/donovan')
      .then((supported) => {
        if (supported) {
          Linking.openURL('https://www.coinbase.com/join/donovan');
        } else {
          console.log('Connot open Coinbase');
        }
      });
  }

  render() {
    return (
      <TouchableHighlight onPress={this.handleClick}>
        <Text style={styles.viewSelect}>Buy Bitcoin</Text>
      </TouchableHighlight>
    );
  }
}
