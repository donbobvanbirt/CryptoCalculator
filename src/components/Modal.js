import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalPicker from 'react-native-modal-picker';

import styles from '../styles';

export default class Modal extends Component {

  render() {
    const { textInputValue, selectExchange } = this.props;
    let index = 0;
    const data = [
      { key: index++, section: true, label: 'Select Exchange:' },
      { key: index++, label: 'Bitfinex' },
      { key: index++, label: 'Bitstamp' },
      { key: index++, label: 'Kraken' },
      { key: index++, label: 'BTC-e' },
      { key: index++, label: 'Okcoin' },
    ];

    return (
      <View style={styles.modal}>

        <ModalPicker
          data={data}
          initValue="Select exchange"
          onChange={option => selectExchange(option)}
        >
          <Text style={styles.modalText}>{`${textInputValue}  BTC/USD`}</Text>
        </ModalPicker>
      </View>
    );
  }
}
