import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
  ? JSON.parse(localStorage.getItem("watchlist"))
  : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  // actions
  const addStockToWatchlist = (ticker, chartPrice) => {
    dispatch({ type: "ADD_STOCK_TO_WATCHLIST", payload: ticker + chartPrice });
    // dispatch({ type: "ADD_STOCK_TO_WATCHLIST", payload: chartPrice });
  };

  const removeStockFromWatchlist = (ticker, chartPrice) => {
    dispatch({ type: "REMOVE_STOCK_FROM_WATCHLIST", payload: ticker + chartPrice });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addStockToWatchlist,
        removeStockFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};