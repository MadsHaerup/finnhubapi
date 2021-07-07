import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from './title/Title';

var api = process.env.REACT_APP_API_KEY;

export default function Financials({ticker}) {

  const [items, setItems] = useState([]);

  useEffect(() => {
  
    async function getFinance(){

      const response = await axios.get(`https://finnhub.io/api/v1/stock/metric?symbol=${ticker === " " ? "fb" : ticker }&metric=all&token=${api}`)

      console.log("profile",response);
      setItems(response.data.metric)
    }
    getFinance();

  }, [setItems, ticker])
  return (
  <article style={{width:"100%"}}>
    <Title title="Financials"/>
    <p>{'Beta:' + ' ' + items.beta} </p>  
  </article>
  )
}
