import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import MarketData from './components/MarketData';

const App = () => (
  <Provider store={store}>
    <MarketData />
  </Provider>
);

export default App;
