import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Button } from 'react-native';

import styles from '../styles';
import Price from './Price';
import Calculator from './Calculator';
import BottomLinks from './BottomLinks';
import Modal from './Modal';

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
            {/* <Button onPress={this.selectExchange} title={currentExchange} />
            <Button onPress={this.selectCurrency} title={currentCurrnecyPair} /> */}
            <Modal />
        </View>
        <View style={styles.body}>
          <Calculator />
        </View>
        <View style={styles.priceView}>
          <Price />
        </View>
        <View style={styles.bottom}>
          <BottomLinks />
        </View>
      </View>
    );
  }
}
