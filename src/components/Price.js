import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from '../styles';

const Price = ({ price }) => {
  const { bid, ask, last, low, high, vol, timestamp, exchange } = price;

  const time = timestamp ? moment(timestamp * 1000).format('L h:mm a') : '';
  return (
    <View>
      <Text style={styles.price}>
        Last Price: {last}
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
        Volume: {vol}
      </Text>
      <Text style={styles.priceDetails}>
        {time}
      </Text>
      <Text style={styles.priceDetails}>
        {exchange}
      </Text>
      <View style={styles.chartView} />
    </View>
  );
};

Price.propTypes = {
  price: PropTypes.object.isRequired,
};

export default Price;
