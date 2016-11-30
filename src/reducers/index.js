import { combineReducers } from 'redux';

import price from './price';
import chart from './chart';

export default combineReducers({
  price,
  chart,
});
