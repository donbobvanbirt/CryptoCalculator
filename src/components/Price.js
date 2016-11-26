import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';
import { fetchPrice } from '../actions/MarketActions';
import PriceChart from './PriceChart';

// @connect(null, dispatch => ({
//   fetchPrice(pair) {
//     dispatch(fetchPrice(pair));
//   },
// }))
class Price extends Component {

  componentWillMount() {
    this.props.fetchPrice('BTCUSD');
  }

  selectExchange() {
    console.log('click');
  }

  selectCurrency() {
    console.log('click');
  }

  render() {
    // console.log('props.price:', this.props.price)
    const { bid, ask, last_price, low, high, volume } = this.props.price;

    const currentExchange = 'Bitfinex';
    const currentCurrnecyPair = 'BTC / USD';
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button onPress={this.selectExchange} title={currentExchange} />
          <Button onPress={this.selectCurrency} title={currentCurrnecyPair} />
        </View>
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
        {/* <PriceChart /> */}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPrice(pair) {
    dispatch(fetchPrice(pair));
  },
});
const mapStateToProps = state => ({ price: state.price });

export default connect(mapStateToProps, mapDispatchToProps)(Price);
