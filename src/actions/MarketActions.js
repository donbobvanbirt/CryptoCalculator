import axios from 'axios';

export function fetchPrice(exchange) {

      // const url = 'https://api.bitfinex.com/v1/pubticker/BTCUSD';
      // data = axios.get('https://api.bitfinex.com/v1/pubticker/BTCUSD').then(res => res.data);
  if (exchange === 'Bitfinex') {
    // console.log('exchange:', exchange);
    return {
      type: 'FETCH_PRICE',
      payload: axios.get('https://api.bitfinex.com/v1/pubticker/BTCUSD').then(res => res.data),
    };
  }
}

// export function fetchChart() {
//   const timestamp = Math.round(Date.now() / 1000);
//   const timeframe = timestamp - 86400;
//   const url = `https://api.bitfinex.com/v1/trades/BTCUSD?timestamp=${timeframe}`;
//
//   return {
//     type: 'FETCH_CHART',
//     payload: axios.get(url).then(res => res.data),
//   };
// }
