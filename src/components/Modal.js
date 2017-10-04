import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import ModalPicker from 'react-native-modal-picker';

import styles from '../styles';

const Modal = (props) => {
  const { textInputValue, select, data, menueTitle } = props;

  const listData = data ? data.map((item, index) => (
    { key: index + 2, label: item }
  )) : [];
  listData.unshift({ key: 1, section: true, label: menueTitle });

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
};

Modal.propTypes = {
  textInputValue: PropTypes.string,
  select: PropTypes.func,
  data: PropTypes.array,
  menueTitle: PropTypes.string,
};

export default Modal;
