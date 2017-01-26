import axios from 'axios';

export function fetchPrice(exchange) {
  let payload;
  if (exchange === 'Bitfinex') {
    payload = axios.get('https://api.bitfinex.com/v1/pubticker/BTCUSD').then(res => res.data);
  } else if (exchange === 'Bitstamp') {
    payload = axios.get('https://www.bitstamp.net/api/ticker/')
      .then((res) => {
        const priceObj = res.data;
        priceObj.last_price = res.data.last;
        // console.log('priceObj:', priceObj);
        return priceObj;
      });
  }
  return {
    type: 'FETCH_PRICE',
    payload,
  };
}
