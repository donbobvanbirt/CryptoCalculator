export default function price(state = {}, action) {
  // console.log('action:', action);
  switch (action.type) {
    case 'FETCH_PRICE_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}
