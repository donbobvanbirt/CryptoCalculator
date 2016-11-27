import React, { Component } from 'react';
import { View } from 'react-native';
import Chart from 'react-native-chart';

import styles from '../styles';

const data = [
  [0, 1],
  [1, 3],
  [3, 7],
  [4, 9],
];

export default class PriceChart extends Component {
  render() {
    return (
      <View style={styles.chartContainer}>
        <Chart
          style={styles.chart}
          data={data}
          verticalGridStep={5}
          type="line"
          color="#000000"
          tightBounds={true}
          showGrid={false}
        />
      </View>
    );
  }
}
