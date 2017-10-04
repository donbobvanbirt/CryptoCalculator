export default function price(state = {}, action) {
  switch (action.type) {
    case 'FETCH_PRICE_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}
