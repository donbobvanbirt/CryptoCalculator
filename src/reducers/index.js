import { combineReducers } from 'redux';

import price from './price';
import exchanges from './exchanges';

export default combineReducers({
  price,
  exchanges,
});
