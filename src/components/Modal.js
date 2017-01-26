import React, { Component } from 'react';
import { View, TouchableHighlight, Text, Button, TextInput } from 'react-native';
import ModalPicker from 'react-native-modal-picker'

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
    // alert(`${option.label} (${option.key})`);
  }

  render() {
    let index = 0;
    const data = [
      { key: index++, section: true, label: 'Fruits' },
      { key: index++, label: 'Bitfinex' },
      { key: index++, label: 'Bitstamp' },
      { key: index++, label: 'Kraken' },
      { key: index++, label: 'BTC-e' },
    ];

    return (
      <View style={{ flex: 1, justifyContent: 'space-around', padding: 50 }}>

        <ModalPicker
          data={data}
          initValue="Select exchange"
          onChange={(option)=>{ alert(`${option.label} (${option.key})`); }}
        />

        <ModalPicker
          data={data}
          initValue="Select exchange"
          // onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
          onChange={option => this.selectExchange(option)}
        >

          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 30 }}
            editable={false}
            placeholder="Select exchange"
            value={this.state.textInputValue}
          />

        </ModalPicker>
      </View>
    );
  }
}
