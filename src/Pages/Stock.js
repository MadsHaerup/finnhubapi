import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import StockChart from '../Components/StockChart';
import CompanyProfile from '../Components/CompanyProfile';
import Sentiment from '../Components/Sentiment';
import Insider from '../Components/Insider';

export default function Stock({ticker}) {

  const {addStockToWatchlist, watchlist} = useContext(GlobalContext);

  let onWatchlist = watchlist.find(obj => obj === ticker);
  console.log('ticker',ticker)

  const watchlistDisabled = onWatchlist ? true : false;

  return (
    <>
      <div>
        <button 
        disabled={watchlistDisabled}
        onClick={()=>addStockToWatchlist(ticker)}> Add to Watchlist</button>
      </div>

      <div>
        <StockChart ticker={ticker}/>
        <CompanyProfile ticker={ticker}/>
        <Sentiment ticker={ticker}/>
        <Insider ticker={ticker}/>
      </div>
    </>
  )
}
