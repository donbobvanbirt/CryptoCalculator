import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';
import Price from './Price';
import Calculator from './Calculator';
import BottomLinks from './BottomLinks';
import Modal from './Modal';
import { fetchPrice } from '../actions/MarketActions';

const availablExchanges = [
  'Bitfinex',
  'Bitstamp',
  'Kraken',
  'BTC-e',
  'Okcoin',
];

const availablePairs = {
  Bitfinex: [
    'BTC/USD',
    'LTC/USD',
    'LTC/BTC',
    'ETH/USD',
    'ETH/BTC',
    'ETC/BTC',
    'ETC/USD',
    'RRT/USD',
    'RRT/BTC',
    'ZEC/USD',
    'ZEC/BTC',
  ],
  Bitstamp: [
    'BTC/USD',
    'BTC/EUR',
    'EUR/USD',
    'XRP/USD',
    'XRP/EUR',
  ],
  Kraken: [
    'BTC/USD',
    'ETC/BTC',
    'ETC/EUR',
    'ETC/USD',
    'ETH/BTC',
    'ETH/CAD',
    'ETH/EUR',
    'ETH/GBP',
    'ETH/JPY',
    'ETH/USD',
    'LTC/BTC',
    'LTC/EUR',
    'LTC/USD',
    'BTC/CAD',
    'BTC/EUR',
    'BTC/GBP',
    'BTC/JPY',
  ],
  'BTC-e': [
    'BTC/USD',
    'BTC/RUR',
    'BTC/EUR',
    'LTC/BTC',
    'LTC/USD',
    'LTC/RUR',
    'LTC/EUR',
    'NMC/BTC',
    'NMC/USD',
    'NVC/BTC',
    'NVC/USD',
    'USD/RUR',
    'EUR/USD',
    'EUR/RUR',
    'PPC/BTC',
    'PPC/USD',
    'DSH/BTC',
    'DSH/USD',
    'ETH/BTC',
    'ETH/USD',
    'ETH/EUR',
    'ETH/LTC',
    'ETH/RUR',
  ],
  Okcoin: [
    'BTC/USD',
    'LTC/USD',
  ],
};

const cryptoPairs = [
  'LTC/BTC',
  'ETH/BTC',
  'ETC/BTC',
  'RRT/BTC',
  'ZEC/BTC',
  'NMC/BTC',
  'NVC/BTC',
  'PPC/BTC',
  'DSH/BTC',
  'ETH/LTC',
];

const fiatPairs = [
  'USD/RUR',
  'EUR/USD',
  'EUR/RUR',
];

class MarketData extends Component {
  constructor() {
    super();
    this.state = {
      exchange: 'Bitfinex',
      pair: 'BTC/USD',
    };
  }

  componentWillMount() {
    const { exchange, pair } = this.state;
    this.props.fetchPrice(exchange, pair);
  }

  getPrice = () => {
    const { exchange, pair } = this.state;
    this.props.fetchPrice(exchange, pair);
  }

  selectExchange = (option) => {
    this.setState({
      exchange: option.label,
      pair: 'BTC/USD',
    });
    this.props.fetchPrice(option.label, 'btcusd');
  }

  selectPair = (option) => {
    this.setState({ pair: option.label });
    this.props.fetchPrice(this.state.exchange, option.label);
  }

  render() {
    const { price } = this.props;
    const { exchange, pair } = this.state;
    let roundFactor1 = 100000000;
    let roundFactor2 = 1000;
    if (cryptoPairs.includes(pair)) {
      roundFactor2 = 100000000;
    } else if (fiatPairs.includes(pair)) {
      roundFactor1 = 1000;
    }

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Modal
            textInputValue={exchange}
            data={availablExchanges}
            select={this.selectExchange}
          />
          <Modal
            textInputValue={pair}
            data={availablePairs[exchange]}
            select={this.selectPair}
          />
        </View>
        <View style={styles.body}>
          <Calculator
            price={price}
            fetchPrice={this.getPrice}
            roundFactor1={roundFactor1}
            roundFactor2={roundFactor2}
          />
        </View>
        <View style={styles.priceView}>
          <Price price={price} />
        </View>
        <View style={styles.bottom}>
          <BottomLinks />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPrice(exchange, pair) {
    dispatch(fetchPrice(exchange, pair));
  },
});
const mapStateToProps = state => ({ price: state.price });

export default connect(mapStateToProps, mapDispatchToProps)(MarketData);
