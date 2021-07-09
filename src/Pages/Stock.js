import React, { useState} from 'react';
import StockChart from '../Components/StockChart';
import CompanyProfile from '../Components/companyProfile/CompanyProfile';
import Sentiment from '../Components/sentiment/Sentiment';
import Insider from '../Components/Insider';
import Peers from '../Components/peers/Peers';
import Financials from '../Components/Financials';
import Input from '../Components/input/Input';
import PatternRegcognition from '../Components/patternRegcognition/PatternRegcognition';

export default function Stock() {

  const [ticker, setTicker] = useState(" ");
  
    const handleInput = (event) => {
      setTicker(event.target.value);
    };

  return (
    <>
      <Input handleInput={handleInput} ticker={ticker}/>
    
      <div>
          <StockChart ticker={ticker}/>
          <Peers ticker={ticker} setTicker={setTicker} />
          <Financials ticker={ticker} />
          <CompanyProfile ticker={ticker}/>
          <PatternRegcognition ticker={ticker}/>
          <Sentiment ticker={ticker}/>
          <Insider ticker={ticker}/>
      </div>
    </>
  )
}
