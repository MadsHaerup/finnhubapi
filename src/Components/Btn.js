import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";

export default function Btn({ticker}) {

  const {
    removeStockFromWatchlist,
  } = useContext(GlobalContext);

  return (
  <>
    <button
      className="ctrl-btn"
      onClick={() => removeStockFromWatchlist(ticker)}>
      <i className="fa-fw fa fa-times">X</i>
    </button>
  </>
  )
}
