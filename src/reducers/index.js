import { combineReducers } from 'redux';

import price from './price';
import exchanges from './exchanges';
import pairs from './pairs';

export default combineReducers({
  price,
  exchanges,
  pairs,
});
