export default function exchanges(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case 'FETCH_EXCHANGES':
      // console.log('action.payload:', action.payload);
      return action.payload;
    default:
      return state;
  }
}
