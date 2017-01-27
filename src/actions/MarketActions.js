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
  } else if (exchange === 'BTC-e') {
    payload = axios.get('https://btc-e.com/api/3/ticker/btc_usd')
      .then((res) => {
        const { btc_usd } = res.data;
        const priceObj = btc_usd;
        priceObj.last_price = btc_usd.last;
        priceObj.volume = btc_usd.vol;
        priceObj.bid = btc_usd.buy;
        priceObj.ask = btc_usd.sell;
        priceObj.timestamp = btc_usd.updated;
        console.log('priceObj:', priceObj);
        return priceObj;
      });
  } else if (exchange === 'Kraken') {
    payload = axios.get('https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD')
      .then((res) => {
        const { a, b, c, v, l, h } = res.data.result.XXBTZUSD;
        return {
          ask: (Math.round(parseFloat(a[0]) * 100) / 100).toString(),
          bid: (Math.round(parseFloat(b[0]) * 100) / 100).toString(),
          last_price: (Math.round(parseFloat(c[0]) * 100) / 100).toString(),
          volume: v[1],
          low: (Math.round(parseFloat(l[1]) * 100) / 100).toString(),
          high: (Math.round(parseFloat(h[1]) * 100) / 100).toString(),
          timestamp: null,
        };
      });
  } else if (exchange === 'Okcoin') {
    payload = axios.get('https://www.okcoin.com/api/v1/ticker.do?symbol=btc_usd')
      .then((res) => {
        const { buy, high, last, low, sell, vol } = res.data.ticker;
        return {
          ask: sell,
          bid: buy,
          last_price: last,
          volume: vol,
          low,
          high,
          timestamp: res.data.date,
        };
      });
  }
  return {
    type: 'FETCH_PRICE',
    payload,
  };
}
