export default function pairs(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case 'FETCH_PAIRS_FULFILLED':
      // console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
