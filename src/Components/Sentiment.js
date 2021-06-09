import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Sentiment({name}) {
  const api = process.env.REACT_APP_API_KEY;
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    axios.get(`https://finnhub.io/api/v1/stock/social-sentiment?symbol=${name}&token=${api}`, { json: true })
    .then((response) =>{
      console.log(response.data)
      setItems(response.data.reddit);
    })

  }, [setItems, name])

  const num = items.map((item)=>(item.mention));
  console.log(num);

  function myFunction(total, value) {
    return total + value;
  }
  let sum = num.reduce(myFunction);

  return (
    <div>
      <p>{sum}</p>
    </div>
  )
}
