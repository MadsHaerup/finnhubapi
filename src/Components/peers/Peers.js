import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PeerContainer from './Peers.styles';
import Title from '../title/Title';
var api = process.env.REACT_APP_API_KEY;

export default function Peers({ticker}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getPeers(){
      const response = await axios.get(`https://finnhub.io/api/v1/stock/peers?symbol=${ticker === " " ? "fb" : ticker }&token=${api}`)
      console.log("profile",response);
      setItems(response.data)
    }
    getPeers();
  }, [setItems, ticker])


  return (
    <>
  <Title title="Peers"/>
  <PeerContainer items={items}>
    {items?.map((item)=>(
    {item}
    ))}
  </PeerContainer>
  </>
  )
}
