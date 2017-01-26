import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Button, TextInput } from 'react-native';
// import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles';
// import BottomLinks from './BottomLinks';
import Price from './Price';
// import { fetchPrice } from '../actions/MarketActions';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      value1: '1',
      value2: null,
      premium: '0',
    };
    this.enterVal1 = this.enterVal1.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { price } = nextProps;
    if (price) {
      // console.log('price:', price);
      const { last_price } = price;
      const { premium, value1 } = this.state;
      let prem = parseFloat(premium);
      if (!prem) { prem = 0; }
      const rate = parseFloat(last_price);
      const currentPrice = rate + (rate * (prem / 100));
      const newVal2 = (Math.round((parseFloat(value1) * currentPrice) * 100) / 100).toString();
      this.setState({
        value2: newVal2,
      });
    }
  }

  enterVal1(val) {
    const { last_price } = this.props.price;
    const { premium } = this.state;
    let prem = parseFloat(premium);
    // console.log('prem:', prem);
    if (!prem) { prem = 0; }
    const rate = parseFloat(last_price);
    const price = rate + (rate * (prem / 100));
    let value2 = (Math.round((parseFloat(val) * price) * 100) / 100).toString();
    if (value2 === 'NaN') { value2 = '0'; }
    this.setState({
      value1: val,
      value2,
    });
  }

  enterVal2(val) {
    const { last_price } = this.props.price;
    const { premium } = this.state;
    let prem = parseFloat(premium);
    if (!prem) { prem = 0; }
    const rate = parseFloat(last_price);
    const price = rate + (rate * (prem / 100));
    let value1 = (Math.round((parseFloat(val) / price) * 100000000) / 100000000).toString();
    if (value1 === 'NaN') { value1 = '0'; }
    this.setState({
      value1,
      value2: val,
    });
  }

  enterPremium(premium) {
    const { value1, value2 } = this.state;
    const { last_price } = this.props.price;
    let prem = parseFloat(premium);
    if (!prem) { prem = 0; }
    const rate = parseFloat(last_price);
    const price = rate + (rate * (prem / 100));
    // let value2 = (Math.round(price * 100) / 100).toString();
    let newVal2 = (Math.round((parseFloat(value1) * price) * 100) / 100).toString();
    if (newVal2 === 'NaN') { newVal2 = '0'; }
    this.setState({
      premium,
      value2: newVal2,
    });
  }

  render() {
    const { value1, value2, premium } = this.state;
    const { last_price } = this.props.price;
    const valueOne = value1;
    const valueTwo = value2 === null ? last_price : value2;
    // console.log('this.state:', this.state);
    const currentExchange = 'Bitfinex';
    const currentCurrnecyPair = 'BTC / USD';
    const refreshIcon = (<Icon name="refresh" style={styles.refreshText} size={20} />)

    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.refresh} onPress={this.props.fetchPrice}>
          {refreshIcon}
        </TouchableHighlight>
        <View style={styles.body}>
          <View style={styles.calcInputContainer}>
            <TextInput style={styles.calcInput} value={valueOne} keyboardType="numeric" onChangeText={val => this.enterVal1(val)} />
            <TextInput style={styles.calcInput} value={valueTwo} keyboardType="numeric" onChangeText={val => this.enterVal2(val)} />
            <View style={styles.premiumView}>
              <Text style={styles.premiumSymbols}>+/-</Text>
              <TextInput style={styles.premiumInput} value={premium} keyboardType="numeric" onChangeText={val => this.enterPremium(val)} />
              <Text style={styles.premiumSymbols}>%</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
