import React, { Component } from 'react';
import { View } from 'react-native';
import Chart from 'react-native-chart';

import styles from '../styles';

let data = [
  [2, 1],
  [4, 9],
  [3, 7],
  [4, 9],
];

export default class PriceChart extends Component {
  // console.log()
  render() {
    const { chartData } = this.props;
    // if (chartData) {
    const newdata = chartData.map((trade) => {
      const { timestamp, price } = trade;
      return [parseFloat(timestamp), parseFloat(price)];
    });
    if (newdata[0]) {
      data = newdata;
    }
    // }
    console.log('newdata', newdata);
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
          lineWidth={2}
        />
      </View>
    );
  }
}
