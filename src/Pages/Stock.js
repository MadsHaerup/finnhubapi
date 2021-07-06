import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import StockChart from '../Components/StockChart';
import CompanyProfile from '../Components/CompanyProfile';
import Sentiment from '../Components/Sentiment';
import Insider from '../Components/Insider';
import Peers from '../Components/Peers';
import Financials from '../Components/Financials';
import Cardview from '../Components/cardview/Cardview';

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
        <div style={{display:"flex", overflow:"scroll"}}>
          {/* <Cardview> */}
          <Peers ticker={ticker}/>
          {/* </Cardview> */}
          <Cardview>
          <Financials ticker={ticker} />
          </Cardview>
          <Cardview>
          <CompanyProfile ticker={ticker}/>
          </Cardview>
          <Cardview>
          <Sentiment ticker={ticker}/>
          </Cardview>

        </div>
          <Insider ticker={ticker}/>
      </div>
    </>
  )
}
