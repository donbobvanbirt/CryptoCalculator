import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import styles from '../styles';

class MarketData extends Component {
  constructor() {
    super();
    this.state = {
      value1: '1',
      value2: null,
    };
    this.enterVal1 = this.enterVal1.bind(this);
  }

  enterVal1(val) {
    // console.log('this.props.price.last_price:', this.props.price.last_price);
    const { last_price } = this.props.price;
    // console.log('typeof val', typeof val);
    let value2 = (Math.round((parseFloat(val) * parseFloat(last_price)) * 1000) / 1000).toString();
    if (value2 === 'NaN') { value2 = '0' };
    this.setState({
      value1: val,
      value2,
    });
  }

  enterVal2(val) {
    const { last_price } = this.props.price;
    let value1 = (Math.round((parseFloat(val) / parseFloat(last_price)) * 100000000) / 100000000).toString();
    if (value1 === 'NaN') { value1 = '0' };
    this.setState({
      value1,
      value2: val,
    });
  }

  selectExchange() {
    console.log('click');
  }

  selectCurrency() {
    console.log('click');
  }

  render() {
    const { value1, value2 } = this.state;
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
          </View>
        </View>
        <View style={styles.bottom} />
      </View>
    );
  }
}

const mapStateToProps = state => ({ price: state.price });

export default connect(mapStateToProps)(MarketData);
