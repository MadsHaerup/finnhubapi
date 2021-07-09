import React, { useEffect, useState } from 'react';
import axios from 'axios';
var api = process.env.REACT_APP_API_KEY;

export default function PatternRegcognition({ticker}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getPattern(){
      const response = await axios.get(`https://finnhub.io/api/v1/scan/pattern?symbol=${ticker === " " ? "fb" : ticker.toUpperCase()}&resolution=D&token=${api}`)
      console.log("pattern",response);
      setItems(response.data.points[0])
    }
    getPattern();
  }, [setItems, ticker])

  console.log(items);

  // var timestamp = items.start_time;
  // var pubDate = new Date(timestamp * 1000);
  // console.log(pubDate)
  return (
    <div>
       <p>{items.aprice} </p>

    </div>
  )
}
