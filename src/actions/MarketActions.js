const coinTicker = require('coin-ticker');

export function fetchPrice(exchange, pair) {
  const payload = coinTicker(exchange.toLowerCase().split('-').join(''), pair.split('/').join('_'));
  // console.log('payload:', payload);
  return {
    type: 'FETCH_PRICE',
    payload,
  };
}

export function fetchExchanges() {
  const payload = coinTicker();
  // console.log('payload:', payload);
  return {
    type: 'FETCH_EXCHANGES',
    payload,
  };
}
