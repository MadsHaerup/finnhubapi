import axios from 'axios';
import React, { useEffect, useState } from 'react';
import sum from '../Helpers/Sum';

export default function Sentiment({ticker}) {
  const api = process.env.REACT_APP_API_KEY;
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(`https://finnhub.io/api/v1/stock/social-sentiment?symbol=${ticker === " " ? "spy" : ticker }&token=${api}`, { json: true })
      console.log("response", response.data)
      setItems(response.data.reddit);
    }
    fetchData();
    // axios.get(`https://finnhub.io/api/v1/stock/social-sentiment?symbol=${ticker === " " ? "spy" : ticker }&token=${api}`, { json: true })
    // .then((response) =>{
    //   console.log(response.data)
    //   setItems(response.data.reddit);
    // })

  }, [setItems,ticker,api])

  const mentions = items.map((item)=>(item.mention));
  console.log(mentions);
  const posscore = items?.map((item)=>(item.positiveScore));
  console.log(posscore);
  const negscore = items?.map((item)=>(item.negativeScore));
  console.log(negscore);

  if (ticker === " " ){
    return "Search for a ticker";
  } else if(items.length === 0){
    return "No data on this ticker, please try again!"
  }
    var getSum = mentions.reduce(sum);
    var getposscore = Math.round(posscore.reduce(sum));
    var getnegscore = Math.round(negscore.reduce(sum));
  
  
  return (
    <div>
      <p>Mentions on Reddit: {getSum}</p>
      <p> In the last {mentions.length} hours</p>

      <p>{getposscore}</p>
      <p>{getnegscore}</p>
      <p>{getposscore < getnegscore  ? "Bearish sentiment" : getposscore === getnegscore ? "Neutral sentiment" : "Bullish sentiment"} </p>
    </div>
  )
}
