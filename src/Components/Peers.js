import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cardview from './cardview/Cardview';

var api = process.env.REACT_APP_API_KEY;

export default function Peers({ticker}) {

  const [items, setItems] = useState([]);

  useEffect(() => {
  
    async function getPeers(){

      const response = await axios.get(`https://finnhub.io/api/v1/stock/peers?symbol=${ticker}&token=${api}`)

      console.log("profile",response);
      setItems(response.data)
    }
    getPeers();

  }, [setItems, ticker])

  return (
  // <article style={{width:"100vw"}}>
  <Cardview>

    <h2>Peers</h2>
    {items?.map((item)=>(
    <p>{item} </p>
    ))}
  </Cardview>
  // </article>

  )
}
