// import React, { Component } from 'react';
// import { View } from 'react-native';
// import Chart from 'react-native-chart';
//
// import styles from '../styles';
//
// let data = [[0, 0]];
//
// export default class PriceChart extends Component {
//   // console.log()
//   render() {
//     const { chartData } = this.props;
//     // if (chartData) {
//     const newdata = chartData.map((trade) => {
//       const { timestamp, price } = trade;
//       return [parseFloat(timestamp)/100000000, parseFloat(price)];
//     });
//     if (newdata[0]) {
//       data = newdata;
//     }
//     // }
//     console.log('newdata', newdata);
//     return (
//       <View style={styles.chartContainer}>
//         <Chart
//           style={styles.chart}
//           data={data}
//           verticalGridStep={5}
//           type="line"
//           color="#000000"
//           tightBounds={true}
//           showGrid={false}
//           showXAxisLabels={false}
//           showAxis={false}
//           lineWidth={2}
//           axisColor="#000000"
//         />
//       </View>
//     );
//   }
// }
