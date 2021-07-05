
export default (state, action) => {
  switch (action.type) {
    case "ADD_STOCK_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_STOCK_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (ticker) => ticker !== action.payload
        ),
      };

    default:
      return state;
  }
};