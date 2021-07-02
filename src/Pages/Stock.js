import React from 'react';
import StockChart from '../Components/StockChart';
import CompanyProfile from '../Components/CompanyProfile';
import Sentiment from '../Components/Sentiment';
import Insider from '../Components/Insider';

export default function Stock({ticker}) {
  return (
    <div>
      <StockChart ticker={ticker}/>
      <CompanyProfile ticker={ticker}/>
      <Sentiment ticker={ticker}/>
      <Insider ticker={ticker}/>
    </div>
  )
}
