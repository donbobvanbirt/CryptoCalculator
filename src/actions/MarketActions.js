const coinTicker = require('coin-ticker');

export function fetchPrice(exchange, pair) {
  const payload = coinTicker(exchange.toLowerCase().split('-').join(''), pair.split('/').join('_'));

  return {
    type: 'FETCH_PRICE',
    payload,
  };
}

export function fetchExchanges() {
  const payload = coinTicker();

  return {
    type: 'FETCH_EXCHANGES',
    payload,
  };
}

export function fetchPairs(exchange) {
  const payload = coinTicker(exchange, 'pairs');

  return {
    type: 'FETCH_PAIRS',
    payload,
  };
}
