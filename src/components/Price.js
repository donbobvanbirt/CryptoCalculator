import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles';

export default class Price extends Component {

  render() {
    const { bid, ask, last_price, low, high, volume, timestamp } = this.props.price;
    const time = timestamp ? moment(timestamp * 1000).format('L h:mm a') : '';
    return (
      <View>
        <Text style={styles.price}>
          Last Price: {last_price}
        </Text>
        <View style={styles.detailContainer}>
          <Text style={styles.priceDetails}>
            Low: {low}
          </Text>
          <Text style={styles.priceDetails}>
            High: {high}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.priceDetails}>
            Bid: {bid}
          </Text>
          <Text style={styles.priceDetails}>
            Ask: {ask}
          </Text>
        </View>
        <Text style={styles.priceDetails}>
          Volume: {volume}
        </Text>
        <Text style={styles.priceDetails}>
          {time}
        </Text>
        <View style={styles.chartView}>
        </View>
      </View>
    );
  }
}
