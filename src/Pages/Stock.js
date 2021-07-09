import React, { useState} from 'react';
import StockChart from '../Components/StockChart';
import CompanyProfile from '../Components/companyProfile/CompanyProfile';
import Sentiment from '../Components/sentiment/Sentiment';
import Insider from '../Components/Insider';
import Peers from '../Components/peers/Peers';
import Financials from '../Components/Financials';
import Input from '../Components/input/Input';
// import { navigate } from "@reach/router";

export default function Stock() {
  const [ticker, setTicker] = useState(" ");


    const handleInput = (event) => {
      // let isMounted = true;
      // if (isMounted) {
      //   navigate(`stocks/${event.target.value}`)
      // }
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
          <Sentiment ticker={ticker}/>
          <Insider ticker={ticker}/>
      </div>
    </>
  )
}
