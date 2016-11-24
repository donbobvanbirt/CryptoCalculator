import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import styles from '../styles';
import BottomLinks from './BottomLinks';

class MarketData extends Component {
  constructor() {
    super();
    this.state = {
      value1: '1',
      value2: null,
      premium: '0',
    };
    this.enterVal1 = this.enterVal1.bind(this);
  }

  enterVal1(val) {
    const { last_price } = this.props.price;
    const { premium } = this.state;
    const rate = parseFloat(last_price);
    const price = rate + (rate * (parseFloat(premium) / 100));
    let value2 = (Math.round((parseFloat(val) * price) * 100) / 100).toString();
    if (value2 === 'NaN') { value2 = '0' };
    this.setState({
      value1: val,
      value2,
    });
  }

  enterVal2(val) {
    const { last_price } = this.props.price;
    const { premium } = this.state;
    const rate = parseFloat(last_price);
    const price = rate + (rate * (parseFloat(premium) / 100));
    let value1 = (Math.round((parseFloat(val) / price) * 100000000) / 100000000).toString();
    if (value1 === 'NaN') { value1 = '0' };
    this.setState({
      value1,
      value2: val,
    });
  }

  enterPremium(premium) {
    const { value1 } = this.state;
    const { last_price } = this.props.price;
    const rate = parseFloat(last_price);
    const price = rate + (rate * (parseFloat(premium) / 100));
    let value2 = (Math.round(price * 100) / 100).toString();
    if (value2 === 'NaN') { value2 = '0' };

    this.setState({
      premium,
      value1: '1',
      value2,
    });
  }

  selectExchange() {
    console.log('click');
  }

  selectCurrency() {
    console.log('click');
  }

  render() {
    const { value1, value2, premium } = this.state;
    const { last_price } = this.props.price;
    const valueOne = value1;
    const valueTwo = value2 === null ? last_price : value2;
    console.log('last_price:', last_price);
    const currentExchange = 'Bitfinex';
    const currentCurrnecyPair = 'BTC / USD';
    return (
      <View style={styles.container}>
        <View style={styles.calculatorTop}>
          <TouchableHighlight onPress={this.props.onBack}>
            <Text style={styles.viewSelect}>Back</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.body}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button onPress={this.selectExchange} title={currentExchange} />
            <Button onPress={this.selectCurrency} title={currentCurrnecyPair} />
          </View>
          <View style={styles.calcInputContainer}>
            <TextInput style={styles.calcInput} value={valueOne} keyboardType="numeric" onChangeText={val => this.enterVal1(val)} />
            <TextInput style={styles.calcInput} value={valueTwo} keyboardType="numeric" onChangeText={val => this.enterVal2(val)} />
            <TextInput style={styles.calcInput} value={premium} keyboardType="numeric" onChangeText={val => this.enterPremium(val)} />
          </View>
        </View>
        <View style={styles.bottom}>
          <BottomLinks />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ price: state.price });

export default connect(mapStateToProps)(MarketData);
