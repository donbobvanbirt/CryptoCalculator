import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles';
import { fetchPrice, fetchChart } from '../actions/MarketActions';
import Calculator from './Calculator';

// import PriceChart from './PriceChart';

// @connect(null, dispatch => ({
//   fetchPrice(pair) {
//     dispatch(fetchPrice(pair));
//   },
// }))
class Price extends Component {

  componentWillMount() {
    this.props.fetchPrice('BTCUSD');
    this.props.fetchChart();
  }

  selectExchange() {
    console.log('click');
  }

  selectCurrency() {
    console.log('click');
  }

  refresh() {
    console.log('refresh');
  }

  render() {
    // console.log('props.price:', this.props.price)
    const { bid, ask, last_price, low, high, volume, timestamp } = this.props.price;
    const time = moment(timestamp * 1000).format('L h:mm a');
    // console.log('timestamp:', timestamp);
    const currentExchange = 'Bitfinex';
    const currentCurrnecyPair = 'BTC / USD';
    const refreshIcon = (<Icon name="refresh" style={styles.refreshText} size={20} />)
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button onPress={this.selectExchange} title={currentExchange} />
          <Button onPress={this.selectCurrency} title={currentCurrnecyPair} />
        </View>
        <TouchableHighlight style={styles.refresh} onPress={() => this.props.fetchPrice('BTCUSD')}>
          {refreshIcon}
          {/* <Text style={styles.refreshText}>RELOAD</Text> */}
        </TouchableHighlight>
        <Text style={styles.price}>
          {last_price}
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
          {/* <PriceChart chartData={this.props.chart} /> */}
        </View>
        <Calculator />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPrice(pair) {
    dispatch(fetchPrice(pair));
  },
  fetchChart() {
    dispatch(fetchChart());
  },
});
const mapStateToProps = state => ({ price: state.price, chart: state.chart });

export default connect(mapStateToProps, mapDispatchToProps)(Price);
