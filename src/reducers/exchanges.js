export default function exchanges(state = [], action) {
  switch (action.type) {
    case 'FETCH_EXCHANGES':
      return action.payload;
    default:
      return state;
  }
}
