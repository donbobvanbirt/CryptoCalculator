export default function price(state = {}, action) {
  // console.log('action:', action);
  switch (action.type) {
    case 'FETCH_PRICE_FULFILLED':
      // console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
