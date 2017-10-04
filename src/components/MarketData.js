import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import styles from '../styles';
import Price from './Price';
import Calculator from './Calculator';
import BottomLinks from './BottomLinks';
import Modal from './Modal';

import { fetchPrice, fetchExchanges } from '../actions/MarketActions';

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
    // const { exchange, pair } = this.state;
    // this.props.fetchPrice(exchange, pair);
    this.props.fetchExchanges();
  }

  getPrice = () => {
    const { exchange, pair } = this.state;
    this.props.fetchPrice(exchange, pair);
  }

  selectExchange = (option) => {
    console.log('option:', option);
    // const { pair } = this.state;
    // const currentPair = availablePairs[option.label].includes(pair) ? pair : 'BTC/USD';
    // const currentPair = pair;
    this.setState({
      exchange: option.label,
      // pair: currentPair,
    });
    // this.props.fetchPrice(option.label, currentPair);
  }

  selectPair = (option) => {
    this.setState({ pair: option.label });
    this.props.fetchPrice(this.state.exchange, option.label);
  }

  render() {
    const { price, exchanges } = this.props;
    const { exchange, pair } = this.state;

    const emptyPrice = _.isEmpty(price);
    console.log('exchanges:', exchanges);
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
            data={exchanges || []}
            select={this.selectExchange}
            menueTitle="Select Exchange:"
          />
          <Modal
            textInputValue={pair}
            data={availablePairs[exchange]}
            select={this.selectPair}
            menueTitle={`Available asset pairs for ${exchange}:`}
          />
        </View>
        <View style={styles.body}>
          {!emptyPrice &&
            <Calculator
              price={price}
              fetchPrice={this.getPrice}
              roundFactor1={roundFactor1}
              roundFactor2={roundFactor2}
            />
          }
        </View>
        <View style={styles.priceView}>
          {emptyPrice ? <Text>loading...</Text> : <Price price={price} />}
        </View>
        <View style={styles.bottom}>
          <BottomLinks />
        </View>
      </View>
    );
  }
}

MarketData.propTypes = {
  price: PropTypes.object,
  exchanges: PropTypes.array,
  fetchPrice: PropTypes.func,
  fetchExchanges: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchPrice(exchange, pair) {
    dispatch(fetchPrice(exchange, pair));
  },
  fetchExchanges(exchange, pair) {
    dispatch(fetchExchanges(exchange, pair));
  },
});
const mapStateToProps = state => ({ price: state.price, exchanges: state.exchanges });

export default connect(mapStateToProps, mapDispatchToProps)(MarketData);
