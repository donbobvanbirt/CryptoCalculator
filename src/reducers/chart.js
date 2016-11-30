export default function chart(state = [], action) {
  // console.log('action:', action);
  switch (action.type) {
    case 'FETCH_CHART_FULFILLED':
      // console.log('action.payload:', action.payload);
      return action.payload;
    default:
      return state;
  }
}
