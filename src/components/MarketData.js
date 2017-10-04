import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import GiftedSpinner from 'react-native-gifted-spinner';

import styles from '../styles';
import Price from './Price';
import Calculator from './Calculator';
import BottomLinks from './BottomLinks';
import Modal from './Modal';

import { fetchPrice, fetchExchanges, fetchPairs } from '../actions/MarketActions';

const fiat = [
  'USD',
  'EUR',
  'GBP',
  'RUR',
  'JPY',
];

class MarketData extends Component {
  constructor() {
    super();
    this.state = {
      exchange: 'bitfinex',
      pair: 'BTC/USD',
      loading: false,
    };
  }

  componentWillMount() {
    this.props.fetchExchanges();
    this.props.fetchPairs(this.state.exchange);
  }

  componentWillReceiveProps(nextProps) {
    const { pairs, price } = this.props;
    const { exchange, pair } = this.state;
    const newPairs = nextProps.pairs;

    if (pairs !== newPairs) {
      if (newPairs.includes(pair)) {
        this.props.fetchPrice(exchange, pair);
      } else {
        this.props.fetchPrice(exchange, newPairs[0]);
        this.setState({ pair: newPairs[0] });
      }
    }
    if (price !== nextProps.price) {
      this.setState({ loading: false });
    }
  }

  getPrice = () => {
    const { exchange, pair } = this.state;
    this.setState({ loading: true });
    this.props.fetchPrice(exchange, pair);
  }

  selectExchange = (option) => {
    this.setState({
      exchange: option.label,
      loading: true,
    });
    this.props.fetchPairs(option.label);
  }

  selectPair = (option) => {
    this.setState({ pair: option.label, loading: true });
    this.props.fetchPrice(this.state.exchange, option.label);
  }

  render() {
    const { price, exchanges, pairs } = this.props;
    const { exchange, pair, loading } = this.state;

    const isLoading = loading || _.isEmpty(price);

    const asset1 = pair.split(/[^A-Za-z]/)[0];
    const asset2 = pair.split(/[^A-Za-z]/)[1];
    const roundFactor1 = fiat.includes(asset1) ? 1000 : 100000000;
    const roundFactor2 = fiat.includes(asset2) ? 1000 : 100000000;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Modal
            textInputValue={exchange}
            data={exchanges}
            select={this.selectExchange}
            menueTitle="Select Exchange:"
          />
          <Modal
            textInputValue={pair.split('_').join('/')}
            data={pairs.map(p => p.split('_').join('/'))}
            select={this.selectPair}
            menueTitle={`Available asset pairs for ${exchange}:`}
          />
        </View>
        <View style={styles.body}>
          {isLoading ?
            <View style={styles.spinnerContainer}>
              <GiftedSpinner />
            </View> :
            <Calculator
              price={price}
              fetchPrice={this.getPrice}
              val1Label={asset1}
              val2Label={asset2}
              roundFactor1={roundFactor1}
              roundFactor2={roundFactor2}
            />
          }
        </View>
        <View style={styles.priceView}>
          {!isLoading && <Price price={price} />}
        </View>
        <View style={styles.bottom}>
          <BottomLinks />
        </View>
      </View>
    );
  }
}

MarketData.propTypes = {
  price: PropTypes.object.isRequired,
  exchanges: PropTypes.array.isRequired,
  pairs: PropTypes.array.isRequired,
  fetchPrice: PropTypes.func.isRequired,
  fetchExchanges: PropTypes.func.isRequired,
  fetchPairs: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchPrice(exchange, pair) {
    dispatch(fetchPrice(exchange, pair));
  },
  fetchExchanges() {
    dispatch(fetchExchanges());
  },
  fetchPairs(exchange) {
    dispatch(fetchPairs(exchange));
  },
});
const mapStateToProps = state => ({
  price: state.price,
  exchanges: state.exchanges,
  pairs: state.pairs,
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketData);
