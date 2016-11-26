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
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  calculatorTop: {
    flex: 1,
    backgroundColor: '#383838',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
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
  calcInput: {
    textAlign: 'center',
    color: '#000000',
    height: 65,
    margin: 8,
    fontSize: 40,
    borderWidth: 1,
  },
  premiumInput: {
    textAlign: 'right',
    color: '#000000',
    height: 43,
    margin: 8,
    fontSize: 20,
    borderWidth: 1,
    width: 100,
  },
  premiumView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 20,
  },
  premiumSymbols: {
    fontSize: 25,
  },
  // calcInputContainer: {
  //
  // },
  priceDetails: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  refresh: {
    width: 75,
    marginTop: 10,
  },
  refreshText: {
    textAlign: 'right',
    color: '#34aaff',
  },
  viewSelect: {
    color: '#c2c6ce',
    fontSize: 17,
    margin: 8,
  },
});
