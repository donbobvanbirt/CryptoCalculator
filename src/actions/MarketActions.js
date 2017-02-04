const coinTicker = require('coin-ticker');

export function fetchPrice(exchange) {
  return {
    type: 'FETCH_PRICE',
    payload: coinTicker(exchange.toLowerCase().split('-').join('')),
  };
}
