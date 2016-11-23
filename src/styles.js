import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#000000',
  },
  top: {
    flex: 1,
    backgroundColor: '#383838',
  },
  body: {
    flex: 9,
    backgroundColor: '#C6C6C6',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#383838',
  },
  price: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 8,
    fontSize: 60,
  },
  priceDetails: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
  detailContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
});
