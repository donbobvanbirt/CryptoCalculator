const coinTicker = require('coin-ticker');

export function fetchPrice(exchange, pair) {
  return {
    type: 'FETCH_PRICE',
    payload: coinTicker(exchange.toLowerCase().split('-').join(''), pair.toLowerCase().split('/').join('')),
  };
}
