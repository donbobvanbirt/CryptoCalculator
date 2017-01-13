import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: '#383838',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 20,
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
    paddingRight: 5,
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
    width: 25,
    marginTop: 10,
    marginLeft: 20,
  },
  refreshText: {
    textAlign: 'center',
    color: '#000000',
  },
  viewSelect: {
    color: '#c2c6ce',
    fontSize: 17,
    margin: 8,
  },
  chartView: {
    alignItems: 'center',
  },
  chartContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C6C6C6',
    // borderWidth: 2,
    width: 350,
    height: 200,
  },
  chart: {
    width: 350,
    height: 200,
  },
});
