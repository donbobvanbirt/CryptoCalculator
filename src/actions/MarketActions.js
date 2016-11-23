import axios from 'axios';

export function fetchPrice(currencyPair) {
  const url = `https://api.bitfinex.com/v1/pubticker/${currencyPair}`;

  return {
    type: 'FETCH_PRICE',
    payload: axios.get(url).then(res => res.data),
  };
}
