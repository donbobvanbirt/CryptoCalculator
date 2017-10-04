export default function pairs(state = [], action) {
  switch (action.type) {
    case 'FETCH_PAIRS_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}
