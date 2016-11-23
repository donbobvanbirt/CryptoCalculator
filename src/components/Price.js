import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../styles';

export default class Price extends Component {
  render() {
    const lastPrice = '741.21';
    const volume = '7520.86';
    const currentExchange = 'Bitfinex';
    const currentCurrnecyPair = 'BTC / USD';
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button title={currentExchange} />
          <Button title={currentCurrnecyPair} />
        </View>
        <Text style={styles.price}>
          {lastPrice}
        </Text>
        <View style={styles.detailContainer}>
          <Text style={styles.priceDetails}>
            Low: {lastPrice}
          </Text>
          <Text style={styles.priceDetails}>
            High: {lastPrice}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.priceDetails}>
            Bid: {lastPrice}
          </Text>
          <Text style={styles.priceDetails}>
            Ask: {lastPrice}
          </Text>
        </View>
        <Text style={styles.priceDetails}>
          Volume: {volume}
        </Text>
      </View>
    );
  }
}
