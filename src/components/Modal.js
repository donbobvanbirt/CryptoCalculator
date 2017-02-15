import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalPicker from 'react-native-modal-picker';

import styles from '../styles';

export default class Modal extends Component {

  render() {
    const { textInputValue, select, data, menueTitle } = this.props;
    const listData = data.map((item, index) => {
      // console.log('index:', index);
      return { key: index + 2, label: item };
    });
    listData.unshift({ key: 1, section: true, label: menueTitle })
    return (
      <View style={styles.modal}>

        <ModalPicker
          data={listData}
          initValue="Select exchange"
          onChange={option => select(option)}
        >
          <Text style={styles.modalText}>{textInputValue}</Text>
        </ModalPicker>
      </View>
    );
  }
}
