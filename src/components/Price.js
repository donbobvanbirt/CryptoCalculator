import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
// import { connect } from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles';
// import { fetchPrice } from '../actions/MarketActions';

export default class Price extends Component {

  render() {
    const { bid, ask, last_price, last, low, high, volume, timestamp } = this.props.price;
    let time = '';
    if (timestamp) time = moment(timestamp * 1000).format('L h:mm a');
    return (
      <View>
        <Text style={styles.price}>
          {/* Last Price: {last_price || last} */}
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
