import axios from 'axios';
import React, { useEffect, useState } from 'react';
import sum from '../../Helpers/Sum';
import SentimentContainer from './Sentiments.styles';
import Title from '../title/Title';
import { FcReddit } from 'react-icons/fc';

export default function Sentiment({ticker}) {
  const api = process.env.REACT_APP_API_KEY;
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(`https://finnhub.io/api/v1/stock/social-sentiment?symbol=${ticker === " " ? "fb" : ticker }&token=${api}`, { json: true })
      console.log("response", response.data)
      setItems(response.data.reddit);
    }
    fetchData();
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
    <>
    <Title title="Reddit Sentiment"/>
    <SentimentContainer>
      <FcReddit style={{fontSize:"2rem"}}/>
      <p>Mentions on Reddit: {getSum}</p>
      <p> In the last {mentions.length} hours</p>
      <p>Positive Score: {getposscore}</p>
      <p>Negative Score: {getnegscore}</p>
      <p>Reddit Sentiment: {getposscore < getnegscore  ? "Bearish" : getposscore === getnegscore ? "Neutral" : "Bullish"} </p>
    </SentimentContainer>
    </>
  )
}
