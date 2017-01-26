import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Button, TextInput } from 'react-native';
import ModalPicker from 'react-native-modal-picker'

import styles from '../styles';

export default class Modal extends Component {

  constructor() {
    super();

    this.state = {
      textInputValue: 'Bitfinex'
    }
  }

  selectExchange = (option) => {
    console.log('option:', option.label);
    this.setState({ textInputValue: option.label });
  }

  render() {
    let index = 0;
    const data = [
      { key: index++, section: true, label: 'Select Exchange:' },
      { key: index++, label: 'Bitfinex' },
      { key: index++, label: 'Bitstamp' },
      { key: index++, label: 'Kraken' },
      { key: index++, label: 'BTC-e' },
    ];

    return (
      <View style={styles.modal}>

        <ModalPicker
          data={data}
          initValue="Select exchange"
          onChange={option => this.selectExchange(option)}
        >
          <Text style={styles.modalText}>{`${this.state.textInputValue}  BTC/USD`}</Text>
        </ModalPicker>
      </View>
    );
  }
}
