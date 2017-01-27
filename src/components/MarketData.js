import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles';
import Price from './Price';
import Calculator from './Calculator';
import BottomLinks from './BottomLinks';
import Modal from './Modal';
import { fetchPrice } from '../actions/MarketActions';

class MarketData extends Component {
  constructor() {
    super();
    this.state = {
      textInputValue: 'Bitfinex',
    };
  }

  componentWillMount() {
    this.props.fetchPrice(this.state.textInputValue);
  }

  getPrice = () => {
    this.props.fetchPrice(this.state.textInputValue);
  }

  selectExchange = (option) => {
    this.setState({ textInputValue: option.label });
    this.props.fetchPrice(option.label);
  }

  render() {
    const { price } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Modal textInputValue={this.state.textInputValue} selectExchange={this.selectExchange} />
        </View>
        <View style={styles.body}>
          <Calculator price={price} fetchPrice={this.getPrice} />
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
  fetchPrice(pair) {
    dispatch(fetchPrice(pair));
  },
});
const mapStateToProps = state => ({ price: state.price });

export default connect(mapStateToProps, mapDispatchToProps)(MarketData);
