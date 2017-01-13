import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Button } from 'react-native';

import styles from '../styles';
import Price from './Price';
import Calculator from './Calculator';
import BottomLinks from './BottomLinks';

export default class MarketData extends Component {

  selectExchange() {
    console.log('click');
  }

  selectCurrency() {
    console.log('click');
  }

  render() {
    const currentExchange = 'Bitfinex';
    const currentCurrnecyPair = 'BTC / USD';

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}> */}
            {/* <Text style={styles.viewSelect}>Calculator</Text> */}
            <Button onPress={this.selectExchange} title={currentExchange} />
            <Button onPress={this.selectCurrency} title={currentCurrnecyPair} />
          {/* </View> */}
        </View>
        <View style={styles.body}>
          <Calculator />
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
